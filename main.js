
const whatsappNumber = '265992282807';
const productGrid = document.querySelector('#product-grid');
const year = document.querySelector('#year');

const products = [
  { name: 'Lenovo Ideapad Core i5', category: 'Laptops', price: 'K645,000', note: '4GB DDR4 · 500GB · 9-hour battery', tag: 'In stock', image: './images/showroom-hero.png' },
  { name: 'Lenovo Ideapad', category: 'Laptops', price: 'K495,000', note: '4GB DDR4 · 320GB · 7-hour battery', tag: 'In stock', image: './images/showroom-collage.png' },
  { name: 'Acer Aspire Core i5', category: 'Laptops', price: 'K385,000', note: '4GB · 500GB · 2.40GHz processor', tag: 'In stock', image: './images/showroom-hero.png' },
  { name: 'Dell Inspiron Notebook PC', category: 'Laptops', price: 'K295,000', note: '4GB · 500GB · Battery lasts some minutes', tag: 'Value', image: './images/showroom-collage.png' },
  { name: 'HP ProBook Core i5', category: 'Laptops', price: 'K295,000', note: 'Metallic casing · Fingerprint scanner · 320GB', tag: 'Value', image: './images/showroom-hero.png' },
  { name: 'Dell Inspiron Notebook Core i5', category: 'Laptops', price: 'K875,000', note: '4GB DDR4 · 500GB · 9-hour battery', tag: 'In stock', image: './images/showroom-collage.png' },
  { name: 'HP 250 Notebook', category: 'Laptops', price: 'K620,000', note: '4GB · 500GB · 8-hour battery', tag: 'In stock', image: './images/showroom-hero.png' },
  { name: 'HP 250 AMD A6', category: 'Laptops', price: 'K745,000', note: '4GB DDR4 · 500GB · 9-hour battery', tag: 'In stock', image: './images/showroom-collage.png' },
  { name: 'Dell Inspiron Notebook', category: 'Laptops', price: 'K295,000', note: '4GB · 500GB · Clean and smart', tag: 'Value', image: './images/showroom-hero.png' },
  { name: 'Lenovo Ideapad Notebook Core i3', category: 'Laptops', price: 'K875,000', note: '4GB DDR4 · 500GB · 8-hour battery', tag: 'In stock', image: './images/showroom-collage.png' },
  { name: 'HP 250', category: 'Laptops', price: 'K645,000', note: '4GB · 500GB · 8-hour battery', tag: 'In stock', image: './images/showroom-hero.png' },
  { name: 'HP 620', category: 'Laptops', price: 'K365,000', note: '4GB · 500GB · 3-hour battery · Metallic casing', tag: 'Value', image: './images/showroom-collage.png' },
  { name: 'Dell Inspiron Notebook AMD', category: 'Laptops', price: 'K650,000', note: '4GB · 500GB · 8-hour battery', tag: 'In stock', image: './images/showroom-hero.png' },
  { name: 'Dell Inspiron Notebook Core i5', category: 'Laptops', price: 'K500,000', note: '4GB DDR4 · 320GB · 3-hour battery', tag: 'Value', image: './images/showroom-collage.png' },
  { name: 'Dell Mini Laptop', category: 'Laptops', price: 'K125,000', note: '4GB · Portable · No hard drive · Battery zero', tag: 'Value', image: './images/showroom-hero.png' },
  { name: 'HP Notebook', category: 'Laptops', price: 'K645,000', note: '4GB · 500GB · 9-hour battery', tag: 'In stock', image: './images/showroom-collage.png' },
  { name: 'Huawei Nova 4', category: 'Phones', price: 'K285,000', note: '8GB RAM · 128GB storage', tag: 'Smart phone', image: './images/showroom-hero.png' },
  { name: 'Redmi 6A', category: 'Phones', price: 'K125,000', note: '3GB RAM · 32GB storage', tag: 'Smart phone', image: './images/showroom-collage.png' },
  { name: 'Huawei Mate 10', category: 'Phones', price: 'K240,000', note: '6GB RAM · 128GB storage', tag: 'Smart phone', image: './images/showroom-hero.png' },
  { name: 'Honor 8 Lite', category: 'Phones', price: 'K160,000', note: '4GB RAM · 32GB storage', tag: 'Smart phone', image: './images/showroom-collage.png' },
  { name: 'Honor 9 Lite', category: 'Phones', price: 'K170,000', note: '4GB RAM · 64GB storage', tag: 'Smart phone', image: './images/showroom-hero.png' },
  { name: 'Honor 7X 32GB', category: 'Phones', price: 'K172,000', note: '4GB RAM · 32GB storage', tag: 'Smart phone', image: './images/showroom-collage.png' },
  { name: 'Mi Play', category: 'Phones', price: 'K185,000', note: '6GB RAM · 64GB storage', tag: 'Smart phone', image: './images/showroom-hero.png' },
  { name: 'Honor 7X 128GB', category: 'Phones', price: 'K205,000', note: '4GB RAM · 128GB storage', tag: 'Smart phone', image: './images/showroom-collage.png' },
  { name: 'Huawei P20', category: 'Phones', price: 'K235,000', note: '4GB RAM · 128GB storage', tag: 'Smart phone', image: './images/showroom-hero.png' },
  { name: 'Huawei Y9 2019', category: 'Phones', price: 'K240,000', note: '4GB RAM · 128GB storage', tag: 'Smart phone', image: './images/showroom-collage.png' },
  { name: 'Triple-SIM Keypad Phone', category: 'Keypad phones', price: 'K30,000', note: 'Brand new · Triple SIM cards', tag: 'Brand new', image: './images/showroom-hero.png' },
  { name: 'KGTEL Keypad Phone', category: 'Keypad phones', price: 'K32,000', note: 'Brand new keypad phone', tag: 'Brand new', image: './images/showroom-collage.png' },
  { name: 'Itel 2163', category: 'Keypad phones', price: 'K35,000', note: 'Small battery · Brand new', tag: 'Brand new', image: './images/showroom-hero.png' },
  { name: 'Itel 5606', category: 'Keypad phones', price: 'K45,000', note: 'Big battery · Brand new', tag: 'Brand new', image: './images/showroom-collage.png' },
  { name: 'Itel 2160', category: 'Keypad phones', price: 'K43,000', note: 'Small battery · Brand new', tag: 'Brand new', image: './images/showroom-hero.png' },
  { name: 'Diamond Double Hotplates', category: 'Appliances', price: 'K90,000', note: 'Double hotplate cooker', tag: 'Appliance', image: './images/showroom-collage.png' },
  { name: 'Laptop Hard Drives', category: 'Accessories', price: 'From K25,000', note: '250GB, 320GB, 500GB and 1TB options', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'DDR3 RAM', category: 'Accessories', price: 'K14,000', note: '4GB laptop memory', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Power Banks', category: 'Accessories', price: 'From K20,000', note: 'Oraimo and other options', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'Laptop Chargers', category: 'Accessories', price: 'From K33,000', note: 'Brand new · Type C options up to K65,000', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Water Heaters', category: 'Appliances', price: 'From K7,000', note: 'Several sizes and price options', tag: 'Appliance', image: './images/showroom-hero.png' },
  { name: 'AirPods', category: 'Accessories', price: 'From K15,000', note: 'Several options up to K45,000', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Type C Phone Chargers', category: 'Accessories', price: 'From K8,000', note: '40W, 66W and 67W options', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'Type B Phone Chargers', category: 'Accessories', price: 'From K3,500', note: 'Complete phone chargers', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'USB Cables', category: 'Accessories', price: 'From K3,000', note: 'Type C and Type B cables', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'Earphones and Headsets', category: 'Accessories', price: 'From K5,000', note: 'Earphones and Type C headsets', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Universal TV and DVD Remotes', category: 'Accessories', price: 'From K8,000', note: 'LED TV and DVD remotes', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'LED Bulbs and Holders', category: 'Accessories', price: 'From K1,800', note: '7W, 9W bulbs, sockets and holders', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'VGA and HDMI Cables', category: 'Accessories', price: 'From K4,000', note: '1.5M, 3M and 5M options', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'TV and Fridge Guards', category: 'Accessories', price: 'K28,000', note: 'Protection for home appliances', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'D-Light Solar Lanterns', category: 'Appliances', price: 'K12,000', note: 'Solar lighting for home and travel', tag: 'Appliance', image: './images/showroom-hero.png' },
  { name: 'Scientific Calculators', category: 'Accessories', price: 'K6,000', note: 'For school and everyday work', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Socket Adapters and Extensions', category: 'Accessories', price: 'From K8,000', note: '3, 4, 5 and 6-hole extensions', tag: 'Accessories', image: './images/showroom-hero.png' },
  { name: 'Flash Drives and Memory Cards', category: 'Accessories', price: 'From K8,500', note: '2GB to 64GB options', tag: 'Accessories', image: './images/showroom-collage.png' },
  { name: 'Keypad Phone Batteries', category: 'Accessories', price: 'From K7,500', note: 'Itel and Tecno small and big batteries', tag: 'Accessories', image: './images/showroom-hero.png' },
];

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderProducts(category = 'All') {
  const visibleProducts = category === 'All' ? products : products.filter((product) => product.category === category);
  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-tag">${product.tag}</span>
        <span class="product-category">${product.category}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.note}</p>
        <div class="product-bottom">
          <strong>${product.price}</strong>
          <a href="${whatsappUrl(`Hello Multivision, I am interested in the ${product.name} (${product.price}). Is it available?`)}" target="_blank" rel="noreferrer">Enquire <span>↗</span></a>
        </div>
      </div>
    </article>
  `).join('');
}

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderProducts(button.dataset.category);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formMessage = document.querySelector('#form-message');
  formMessage.className = 'form-note success-message';
  formMessage.textContent = 'Thanks — your message is ready. We will be in touch soon.';
  event.target.reset();
});

year.textContent = new Date().getFullYear();
renderProducts();