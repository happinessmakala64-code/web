import {createServer} from "node:http";
import {randomBytes, randomUUID, timingSafeEqual} from "node:crypto";
import {readFile, stat, writeFile} from "node:fs/promises";
import {dirname, join} from "node:path";
import {fileURLToPath} from "node:url";

const dataFile = join(dirname(fileURLToPath(import.meta.url)), "data", "products.json");
const siteRoot = join(dirname(dirname(fileURLToPath(import.meta.url))));
const port = Number(process.env.PORT || 3000);
const adminPassword = process.env.ADMIN_PASSWORD;
const sessions = new Set();

function send(response, status, payload) { response.writeHead(status, {"Content-Type": "application/json", "Access-Control-Allow-Origin": process.env.FRONTEND_ORIGIN || "*", "Access-Control-Allow-Headers": "Content-Type, Authorization", "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"}); response.end(JSON.stringify(payload)); }
async function products() { return JSON.parse(await readFile(dataFile, "utf8")); }
async function saveProducts(value) { await writeFile(dataFile, JSON.stringify(value, null, 2)); }
async function body(request) { let content = ""; for await (const chunk of request) { content += chunk; if (content.length > 12_000_000) throw new Error("Request is too large."); } return JSON.parse(content || "{}"); }
function authorised(request) { const token = request.headers.authorization?.replace(/^Bearer\s+/, ""); return token && sessions.has(token); }
function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
function validPassword(value) { if (!adminPassword || typeof value !== "string") return false; const expected = Buffer.from(adminPassword); const received = Buffer.from(value); return expected.length === received.length && timingSafeEqual(expected, received); }
function contentType(file) { return {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".svg":"image/svg+xml",".ico":"image/x-icon"}[file.slice(file.lastIndexOf("."))] || "application/octet-stream"; }
async function serveSite(pathname, response) { const requested = pathname === "/" ? "/index.html" : pathname; const file = join(siteRoot, requested.replace(/^\//, "")); if (!file.startsWith(siteRoot)) return false; try { if (!(await stat(file)).isFile()) return false; response.writeHead(200, {"Content-Type": contentType(file), "Cache-Control": pathname === "/admin.html" ? "no-store" : "public, max-age=300"}); response.end(await readFile(file)); return true; } catch { return false; } }

createServer(async (request, response) => {
  if (request.method === "OPTIONS") return send(response, 204, {});
  const url = new URL(request.url, `http://${request.headers.host}`);
  try {
    if (url.pathname === "/health" && request.method === "GET") return send(response, 200, {ok: true});
    if (url.pathname === "/admin/login" && request.method === "POST") { const input = await body(request); if (!validPassword(input.password)) return send(response, 401, {error: "Invalid admin password."}); const token = randomBytes(32).toString("hex"); sessions.add(token); return send(response, 200, {token}); }
    if (url.pathname === "/products" && request.method === "GET") return send(response, 200, await products());
    if (request.method === "GET" && await serveSite(url.pathname, response)) return;
    if (!authorised(request)) return send(response, 401, {error: "Admin authentication required."});
    if (url.pathname === "/products" && request.method === "POST") { const input = await body(request); const items = await products(); const product = {...input, id: input.id || `${slug(input.name || "product")}-${randomUUID().slice(0, 8)}`}; items.push(product); await saveProducts(items); return send(response, 201, product); }
    const match = url.pathname.match(/^\/products\/([^/]+)$/);
    if (match) { const items = await products(); const index = items.findIndex(item => item.id === decodeURIComponent(match[1])); if (index < 0) return send(response, 404, {error: "Product not found."}); if (request.method === "DELETE") { const [removed] = items.splice(index, 1); await saveProducts(items); return send(response, 200, removed); } if (request.method === "PUT") { items[index] = {...items[index], ...(await body(request)), id: items[index].id}; await saveProducts(items); return send(response, 200, items[index]); } }
    return send(response, 404, {error: "Route not found."});
  } catch (error) { return send(response, 500, {error: error.message || "Server error."}); }
}).listen(port, () => console.log(`Catalogue API listening on port ${port}`));