/* =====================================================
   PURIMAS 3 — Interaksi Umum
   ===================================================== */

// ----- Mobile nav toggle -----
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.textContent = isOpen ? "✕" : "☰";
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.textContent = "☰";
    })
  );
}

// ----- Scroll reveal -----
function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
}

// ----- Build lapis divider (signature ribbon) with N segments -----
function buildLapis(el, segments = 24) {
  if (!el) return;
  el.innerHTML = "";
  for (let i = 0; i < segments; i++) {
    const span = document.createElement("span");
    el.appendChild(span);
  }
}

// ----- Toast -----
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

// ----- Render category card icon set (used on home + produk page) -----
function categoryCardMarkup(catKey) {
  const meta = CATEGORY_META[catKey];
  const count = PRODUCTS.filter((p) => p.cat === catKey).length;
  return `
    <a href="produk.html?kategori=${catKey}" class="category-card reveal">
      <div class="cat-icon">${categoryIcon(catKey)}</div>
      <h4>${meta.label}</h4>
      <span>${count} menu</span>
    </a>`;
}

// ----- Render one product card -----
function productCardMarkup(p) {
  const badge = p.badge
    ? `<span class="product-badge ${p.badge === "Promo" ? "promo" : ""}">${p.badge}</span>`
    : "";
  const priceHtml = p.oldPrice
    ? `<span class="old">${formatRupiah(p.oldPrice)}</span>${formatRupiah(p.price)}`
    : formatRupiah(p.price);
  return `
    <article class="product-card reveal">
      <a href="detail-produk.html?id=${p.id}" class="product-media" style="background:${CATEGORY_META[p.cat].bg}">
        ${badge}
        ${categoryIcon(p.cat)}
      </a>
      <div class="product-body">
        <span class="product-cat">${CATEGORY_META[p.cat].label}</span>
        <h3 class="product-name"><a href="detail-produk.html?id=${p.id}">${p.name}</a></h3>
        <p style="font-size:.87rem;color:var(--brown-mid);margin:0;">${p.desc}</p>
        <div class="product-price">${priceHtml}</div>
        <div class="product-actions">
          <a class="btn btn-primary btn-small" href="detail-produk.html?id=${p.id}">Lihat Detail</a>
          <button class="btn btn-outline btn-small" onclick="quickWhatsapp('${p.name.replace(/'/g, "")}')">Pesan</button>
        </div>
      </div>
    </article>`;
}

function quickWhatsapp(productName) {
  const msg = encodeURIComponent(`Halo Purimas 3, saya ingin memesan: ${productName}. Apakah masih tersedia?`);
  window.open(`https://wa.me/6281234567890?text=${msg}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initScrollReveal();
  document.querySelectorAll(".lapis-divider").forEach((el) => buildLapis(el));

  // set active nav link based on current page
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a:not(.nav-cta)").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === path) a.classList.add("active");
  });

  // update year in footer
  const yearEl = document.querySelector("#footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});