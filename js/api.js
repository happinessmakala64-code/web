async function fetchProductsFromApi() {
  const response = await fetch(apiUrl("/products"));
  if (!response.ok) throw new Error(`API responded with ${response.status}`);
  const payload = await response.json();
  return Array.isArray(payload) ? payload : (payload.products || []);
}

function apiUrl(path) {
  if (typeof API_BASE_URL === "undefined" || !API_BASE_URL) return path;
  return `${API_BASE_URL.replace(/\/$/, "")}${path}`;
}

async function adminApiRequest(path, options = {}) {
  const response = await fetch(apiUrl(path), {
    ...options,
    headers: {"Content-Type": "application/json", ...(options.headers || {})}
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `API responded with ${response.status}`);
  return payload;
}