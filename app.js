const express = require("express");
const app = express();
const port = 5000;

// mendefinisikan route root (/) yang merender index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

// mendefinisikan route contact (/contact) yang merender contact.html
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/html/contact.html");
});

// mendefinisikan route about (/about) yang merender about.html
app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/html/about.html");
});

// mendefinisikan middleware jika halaman tidak ditemukan
app.use("/", (req, res) => {
    res.send("Page not found: 404");
    res.status(404);
});

// menjalankan express pada port
app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
