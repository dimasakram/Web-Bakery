/* =====================================================
   PURIMAS 3 — Data Produk (30 menu)
   Kategori: kue-basah, bolu, ulang-tahun, cookies, donat, pastry
   ===================================================== */

const PRODUCTS = [
  // ---------- KUE BASAH ----------
  { id: 1, name: "Klepon Pandan Original", cat: "kue-basah", price: 18000, badge: "Best Seller",
    desc: "Klepon pandan isi gula merah cair, balut kelapa parut segar.",
    detail: "Klepon buatan Purimas 3 dibuat dari tepung ketan pandan asli dan diisi gula merah pilihan yang meleleh sempurna saat digigit, lalu dibalut kelapa parut kukus yang gurih.",
    rating: 4.9, sold: 812, minOrder: "1 dus isi 10", tahan: "1 hari suhu ruang" },
  { id: 2, name: "Nagasari Pisang Raja", cat: "kue-basah", price: 12000,
    desc: "Kue tepung beras lembut berisi pisang raja, dibungkus daun pisang.",
    detail: "Nagasari klasik dengan tekstur lembut dari tepung beras dan santan, diisi potongan pisang raja manis, dibungkus daun pisang agar aromanya khas.",
    rating: 4.7, sold: 430, minOrder: "1 dus isi 10", tahan: "1 hari suhu ruang" },
  { id: 3, name: "Kue Lumpur Kelapa Muda", cat: "kue-basah", price: 14000,
    desc: "Kue lumpur lembut topping kelapa muda dan kismis.",
    detail: "Bertekstur lumer di mulut, kue lumpur ini dibuat dari campuran kentang dan santan, ditaburi kelapa muda serut dan kismis di atasnya.",
    rating: 4.8, sold: 356, minOrder: "1 dus isi 10", tahan: "1 hari suhu ruang" },
  { id: 4, name: "Putu Ayu Santan", cat: "kue-basah", price: 11000,
    desc: "Kue kukus hijau pandan dengan taburan kelapa parut gurih.",
    detail: "Putu ayu bertekstur lembut dan harum pandan, dipadukan kelapa parut gurih asin di alasnya sebagai ciri khasnya.",
    rating: 4.6, sold: 298, minOrder: "1 dus isi 10", tahan: "1 hari suhu ruang" },
  { id: 5, name: "Talam Hijau Santan", cat: "kue-basah", price: 13000,
    desc: "Dua lapis kue talam: pandan di bawah, santan gurih di atas.",
    detail: "Perpaduan lapisan pandan yang manis dan lapisan santan gurih yang lembut, menghasilkan rasa manis-gurih klasik khas nusantara.",
    rating: 4.7, sold: 265, minOrder: "1 dus isi 10", tahan: "1 hari suhu ruang" },

  // ---------- BOLU ----------
  { id: 6, name: "Bolu Gulung Cokelat", cat: "bolu", price: 45000, badge: "Best Seller",
    desc: "Bolu gulung lembut dengan krim cokelat premium di dalamnya.",
    detail: "Dipanggang tipis lalu digulung bersama krim cokelat premium yang lumer, cocok untuk suguhan keluarga atau oleh-oleh.",
    rating: 4.9, sold: 540, minOrder: "1 pcs (18cm)", tahan: "2 hari suhu ruang / 5 hari kulkas" },
  { id: 7, name: "Bolu Marmer Klasik", cat: "bolu", price: 42000,
    desc: "Perpaduan adonan vanila dan cokelat dengan motif marmer cantik.",
    detail: "Motif marmer terbentuk dari perpaduan dua adonan vanila dan cokelat yang dipadukan manual, hasil potongan selalu unik di tiap loyang.",
    rating: 4.7, sold: 312, minOrder: "1 pcs (loyang sedang)", tahan: "2 hari suhu ruang" },
  { id: 8, name: "Bolu Pandan Keju", cat: "bolu", price: 48000,
    desc: "Bolu pandan lembut bertabur keju parut melimpah.",
    detail: "Aroma pandan asli berpadu dengan gurihnya taburan keju parut yang melimpah di permukaan, favorit anak-anak dan dewasa.",
    rating: 4.8, sold: 398, minOrder: "1 pcs (loyang sedang)", tahan: "2 hari suhu ruang" },
  { id: 9, name: "Bolu Pisang Karamel", cat: "bolu", price: 46000,
    desc: "Bolu pisang lembut dengan siraman saus karamel gula aren.",
    detail: "Potongan pisang matang dipadukan dengan adonan bolu lembut, disiram saus karamel gula aren buatan sendiri di atasnya.",
    rating: 4.8, sold: 274, minOrder: "1 pcs (loyang sedang)", tahan: "2 hari suhu ruang" },
  { id: 10, name: "Bolu Kukus Mekar Warna", cat: "bolu", price: 25000,
    desc: "Bolu kukus warna-warni yang merekah cantik, isi 6 pcs.",
    detail: "Bolu kukus tradisional yang merekah sempurna di bagian atasnya, hadir dalam warna-warna cerah yang menggugah selera anak-anak.",
    rating: 4.6, sold: 189, minOrder: "1 pak isi 6", tahan: "1 hari suhu ruang" },

  // ---------- KUE ULANG TAHUN ----------
  { id: 11, name: "Red Velvet Deluxe", cat: "ulang-tahun", price: 185000, oldPrice: 220000, badge: "Promo",
    desc: "Cake red velvet lembut dengan frosting cream cheese khas.",
    detail: "Tiga lapis red velvet lembut disatukan dengan frosting cream cheese yang lembut dan sedikit asam, dihias sederhana namun elegan. Bisa custom tulisan ucapan.",
    rating: 4.9, sold: 176, minOrder: "1 loyang (Ø18cm)", tahan: "3 hari kulkas" },
  { id: 12, name: "Chocolate Truffle Cake", cat: "ulang-tahun", price: 210000, badge: "Best Seller",
    desc: "Cake cokelat pekat berlapis ganache truffle premium.",
    detail: "Sponge cokelat lembap berlapis ganache truffle premium yang pekat, disiram drip cokelat mengkilap, favorit pecinta cokelat sejati.",
    rating: 5.0, sold: 320, minOrder: "1 loyang (Ø18cm)", tahan: "3 hari kulkas" },
  { id: 13, name: "Rainbow Fiesta Cake", cat: "ulang-tahun", price: 195000,
    desc: "Cake pelangi 6 warna dengan buttercream vanila lembut.",
    detail: "Enam lapis sponge warna-warni yang ceria, dibalut buttercream vanila lembut, cocok untuk ulang tahun anak-anak.",
    rating: 4.8, sold: 145, minOrder: "1 loyang (Ø18cm)", tahan: "3 hari kulkas" },
  { id: 14, name: "Cake Karakter Kartun Custom", cat: "ulang-tahun", price: 275000, badge: "Baru",
    desc: "Cake dekorasi karakter kartun sesuai request, full custom.",
    detail: "Dekorasi fondant karakter kartun favorit anak dibuat handmade oleh tim dekorasi kami, desain dapat disesuaikan dengan permintaan.",
    rating: 4.9, sold: 98, minOrder: "1 loyang (Ø20cm)", tahan: "3 hari kulkas" },
  { id: 15, name: "Buttercream Bunga Elegan", cat: "ulang-tahun", price: 230000,
    desc: "Cake dihias rangkaian bunga buttercream buatan tangan.",
    detail: "Rangkaian bunga buttercream dibentuk satu per satu oleh dekorator kami, memberi kesan elegan dan cocok untuk acara spesial.",
    rating: 4.9, sold: 132, minOrder: "1 loyang (Ø18cm)", tahan: "3 hari kulkas" },
  { id: 16, name: "Ombre Pastel Cake", cat: "ulang-tahun", price: 205000,
    desc: "Cake gradasi warna pastel lembut, tampilan Instagramable.",
    detail: "Gradasi warna pastel yang halus pada frosting-nya membuat cake ini jadi favorit untuk foto acara, dengan rasa vanila lembut.",
    rating: 4.7, sold: 110, minOrder: "1 loyang (Ø18cm)", tahan: "3 hari kulkas" },

  // ---------- COOKIES ----------
  { id: 17, name: "Nastar Klasik Nanas", cat: "cookies", price: 75000, badge: "Best Seller",
    desc: "Nastar lumer dengan selai nanas asli, favorit musim lebaran.",
    detail: "Kulit nastar lumer di mulut membungkus selai nanas asli yang dimasak dari nanas segar, tanpa bahan pengawet.",
    rating: 4.9, sold: 620, minOrder: "1 toples (± 300gr)", tahan: "1 bulan (kedap udara)" },
  { id: 18, name: "Kastengel Keju Edam", cat: "cookies", price: 80000,
    desc: "Kastengel gurih renyah dengan keju edam pilihan.",
    detail: "Dibuat dari keju edam pilihan yang ditaburkan melimpah, menghasilkan rasa gurih dan aroma keju yang kuat di setiap gigitan.",
    rating: 4.8, sold: 410, minOrder: "1 toples (± 300gr)", tahan: "1 bulan (kedap udara)" },
  { id: 19, name: "Choco Chip Cookies", cat: "cookies", price: 55000,
    desc: "Cookies renyah bertabur choco chip melimpah.",
    detail: "Cookies bertekstur renyah di luar dan sedikit chewy di dalam, dipenuhi choco chip berkualitas yang meleleh saat digigit hangat.",
    rating: 4.7, sold: 388, minOrder: "1 toples (± 300gr)", tahan: "3 minggu (kedap udara)" },
  { id: 20, name: "Putri Salju", cat: "cookies", price: 60000,
    desc: "Kue kering lumer berbalur gula halus manis lembut.",
    detail: "Tekstur kue yang sangat rapuh dan lumer, dibalut gula halus tebal yang memberi sensasi manis lembut khas kue lebaran.",
    rating: 4.8, sold: 275, minOrder: "1 toples (± 300gr)", tahan: "1 bulan (kedap udara)" },
  { id: 21, name: "Sagu Keju Renyah", cat: "cookies", price: 58000,
    desc: "Kue sagu renyah dengan campuran keju gurih.",
    detail: "Terbuat dari tepung sagu berkualitas dicampur keju parut, menghasilkan tekstur renyah yang khas dan tidak mudah hancur.",
    rating: 4.6, sold: 201, minOrder: "1 toples (± 300gr)", tahan: "1 bulan (kedap udara)" },

  // ---------- DONAT ----------
  { id: 22, name: "Donat Gula Halus", cat: "donat", price: 8000,
    desc: "Donat empuk klasik dengan taburan gula halus.",
    detail: "Donat dengan tekstur empuk berongga khas, digoreng matang sempurna dan ditaburi gula halus secukupnya.",
    rating: 4.6, sold: 540, minOrder: "1 pcs (min. beli 6)", tahan: "1 hari suhu ruang" },
  { id: 23, name: "Donat Cokelat Kacang", cat: "donat", price: 9500, badge: "Best Seller",
    desc: "Donat topping cokelat leleh dan taburan kacang panggang.",
    detail: "Diselimuti lapisan cokelat leleh yang mengeras sempurna, ditaburi kacang panggang cincang untuk sensasi renyah.",
    rating: 4.8, sold: 610, minOrder: "1 pcs (min. beli 6)", tahan: "1 hari suhu ruang" },
  { id: 24, name: "Donat Glaze Strawberry", cat: "donat", price: 9000,
    desc: "Donat lembut dengan glaze strawberry manis segar.",
    detail: "Lapisan glaze strawberry berwarna cerah dengan rasa manis asam yang menyegarkan, disukai anak-anak.",
    rating: 4.7, sold: 402, minOrder: "1 pcs (min. beli 6)", tahan: "1 hari suhu ruang" },
  { id: 25, name: "Donat Kentang Original", cat: "donat", price: 8500,
    desc: "Donat kentang yang empuk tahan lama, rasa original.",
    detail: "Campuran kentang pada adonan membuat donat ini tetap empuk lebih lama dibanding donat biasa, cocok untuk stok camilan.",
    rating: 4.7, sold: 356, minOrder: "1 pcs (min. beli 6)", tahan: "2 hari suhu ruang" },

  // ---------- PASTRY ----------
  { id: 26, name: "Croissant Butter Premium", cat: "pastry", price: 22000, badge: "Best Seller",
    desc: "Croissant berlapis mentega premium, renyah berlipat.",
    detail: "Dibuat dengan teknik laminasi berlapis-lapis menggunakan mentega premium, menghasilkan tekstur renyah di luar dan lembut berongga di dalam.",
    rating: 4.9, sold: 468, minOrder: "1 pcs", tahan: "1 hari suhu ruang" },
  { id: 27, name: "Pie Buah Segar", cat: "pastry", price: 28000,
    desc: "Pie renyah dengan vla lembut dan topping buah segar.",
    detail: "Kulit pie renyah diisi vla vanila lembut, dilengkapi topping buah-buahan segar pilihan yang diganti sesuai musim.",
    rating: 4.7, sold: 234, minOrder: "1 pcs", tahan: "1 hari kulkas" },
  { id: 28, name: "Puff Pastry Sosis", cat: "pastry", price: 15000,
    desc: "Pastry gurih berlapis isi sosis ayam premium.",
    detail: "Adonan puff pastry yang renyah berlapis membungkus sosis ayam premium, cocok untuk sarapan atau bekal praktis.",
    rating: 4.6, sold: 298, minOrder: "1 pcs", tahan: "1 hari suhu ruang" },
  { id: 29, name: "Cheese Roll Lumer", cat: "pastry", price: 18000,
    desc: "Roti gulung lembut isi keju leleh melimpah.",
    detail: "Roti bertekstur lembut digulung dengan isian keju yang meleleh sempurna saat disantap hangat, gurih dan mengenyangkan.",
    rating: 4.8, sold: 315, minOrder: "1 pcs", tahan: "1 hari suhu ruang" },
  { id: 30, name: "Danish Almond", cat: "pastry", price: 24000,
    desc: "Pastry Denmark renyah bertabur irisan almond panggang.",
    detail: "Pastry khas Denmark dengan lapisan renyah berminyak mentega, diberi krim almond dan taburan irisan almond panggang di atasnya.",
    rating: 4.8, sold: 187, minOrder: "1 pcs", tahan: "1 hari suhu ruang" },
];

function formatRupiah(num) {
  return "Rp" + num.toLocaleString("id-ID");
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

function getRelatedProducts(product, count = 4) {
  return PRODUCTS.filter((p) => p.cat === product.cat && p.id !== product.id).slice(0, count);
}