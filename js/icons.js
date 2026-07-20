/* =====================================================
   PURIMAS 3 — Icon set (SVG) per kategori
   Setiap kategori punya bentuk khas sendiri, bukan foto generik.
   ===================================================== */

const CATEGORY_META = {
  "kue-basah": { label: "Kue Basah", bg: "#F6E7C6" },
  "bolu": { label: "Bolu", bg: "#EFDBAE" },
  "ulang-tahun": { label: "Kue Ulang Tahun", bg: "#F6E7C6" },
  "cookies": { label: "Cookies Kering", bg: "#EFDBAE" },
  "donat": { label: "Donat", bg: "#F6E7C6" },
  "pastry": { label: "Pastry", bg: "#EFDBAE" },
};

function categoryIcon(cat) {
  switch (cat) {
    case "kue-basah":
      // bungkusan daun pisang segitiga (klepon/nagasari)
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 14 L82 76 Q50 90 18 76 Z" fill="var(--gold-pale)" stroke="var(--brown-mid)" stroke-width="3"/>
        <path d="M50 14 L50 90" stroke="var(--brown-mid)" stroke-width="2" stroke-dasharray="4 5"/>
        <circle cx="50" cy="55" r="9" fill="var(--brown-mid)"/>
        <path d="M18 76 Q50 66 82 76" stroke="var(--blue-deep)" stroke-width="3" fill="none"/>
      </svg>`;
    case "bolu":
      // gulungan bolu (spiral)
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="30" width="72" height="44" rx="10" fill="var(--gold)"/>
        <path d="M20 30 C20 20 34 20 34 30 C34 40 48 40 48 30 C48 20 62 20 62 30 C62 40 76 40 76 30" stroke="var(--brown-mid)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="50" cy="52" r="16" fill="var(--brown-dark)"/>
        <circle cx="50" cy="52" r="10" fill="var(--gold-pale)"/>
        <circle cx="50" cy="52" r="4.5" fill="var(--brown-mid)"/>
      </svg>`;
    case "ulang-tahun":
      // kue tingkat dengan lilin
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="60" width="56" height="24" rx="4" fill="var(--blue-deep)"/>
        <rect x="30" y="42" width="40" height="20" rx="4" fill="var(--gold)"/>
        <rect x="38" y="26" width="24" height="18" rx="4" fill="var(--gold-pale)"/>
        <rect x="47" y="10" width="6" height="16" rx="2" fill="var(--brown-mid)"/>
        <path d="M50 4 Q54 9 50 13 Q46 9 50 4 Z" fill="var(--gold-deep)"/>
        <circle cx="35" cy="72" r="3" fill="var(--gold-pale)"/>
        <circle cx="50" cy="72" r="3" fill="var(--gold-pale)"/>
        <circle cx="65" cy="72" r="3" fill="var(--gold-pale)"/>
      </svg>`;
    case "cookies":
      // dua kue kering dengan choco chip
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="38" cy="60" r="26" fill="var(--gold)"/>
        <circle cx="66" cy="38" r="20" fill="var(--gold-pale)" stroke="var(--brown-soft)" stroke-width="2"/>
        <circle cx="30" cy="54" r="3.2" fill="var(--brown-dark)"/>
        <circle cx="44" cy="66" r="3.2" fill="var(--brown-dark)"/>
        <circle cx="34" cy="70" r="2.6" fill="var(--brown-dark)"/>
        <circle cx="60" cy="34" r="2.6" fill="var(--brown-mid)"/>
        <circle cx="72" cy="42" r="2.6" fill="var(--brown-mid)"/>
      </svg>`;
    case "donat":
      // donat dengan taburan
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="34" fill="var(--brown-mid)"/>
        <circle cx="50" cy="50" r="34" fill="var(--gold)" opacity="0.001"/>
        <path d="M50 16a34 34 0 100 68 34 34 0 000-68z" fill="var(--gold-deep)"/>
        <circle cx="50" cy="50" r="12" fill="var(--cream)"/>
        <rect x="34" y="30" width="6" height="6" rx="2" fill="var(--blue-deep)" transform="rotate(20 34 30)"/>
        <rect x="60" y="28" width="6" height="6" rx="2" fill="var(--cream)" transform="rotate(-15 60 28)"/>
        <rect x="66" y="52" width="6" height="6" rx="2" fill="var(--blue-soft)" transform="rotate(40 66 52)"/>
        <rect x="30" y="62" width="6" height="6" rx="2" fill="var(--cream)" transform="rotate(10 30 62)"/>
      </svg>`;
    case "pastry":
      // croissant
      return `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 62 Q30 20 50 22 Q70 20 86 62 Q70 50 62 62 Q56 48 50 62 Q44 48 38 62 Q30 50 14 62Z" fill="var(--gold)" stroke="var(--brown-mid)" stroke-width="3" stroke-linejoin="round"/>
      </svg>`;
    default:
      return `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="30" fill="var(--gold)"/></svg>`;
  }
}