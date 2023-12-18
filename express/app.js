// Memuat modul express
const express = require("express");

// Membuat aplikasi express
const app = express();

// Menentukan port server
const port = 3000;

app.set("view engine", "ejs");

// Menangani permintaan GET ke rute root ("/")
app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "Angga",
      email: "anggawidiarta55@gmail.com",
    },
    {
      nama: "Lao",
      email: "lao@gmail.com",
    },
    {
      nama: "Leewulong",
      email: "Lee@gmail.com",
    },
  ];
  // Mengirim "Hello World!" sebagai respon
  res.render("pages/index", { mahasiswa });
});

// Menangani permintaan GET ke rute "/about"
app.get("/about", (req, res) => {
  // Mengirim file about.html sebagai respon
  res.sendFile("./about.html", { root: __dirname });
});

// Menangani permintaan GET ke rute "/about/product/:id"
app.get("/about/product/:id", (req, res) => {
  // Mengirim "Product ID : [id]" sebagai respon, di mana [id] adalah id produk yang diterima dari parameter rute
  res.send(`Product ID : ${req.params.id}`);
});

// Menangani permintaan GET ke rute "/about/product/shoes=converse"
app.get("/about/product/shoes=", (req, res) => {
  // Mengirim "Product Query : [query]" sebagai respon, di mana [query] adalah query yang diterima dari parameter rute
  res.send(`Product Query : ${req.query.shoes}`);
});

// Menjalankan server di port yang ditentukan
app.listen(port, () => {
  // Menampilkan pesan log ketika server berjalan
  console.log(`Example app listening on port ${port}`);
});
