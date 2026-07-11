const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server aktif!");
});

app.post("/webhook", (req, res) => {
  console.log("=== ALERT DITERIMA ===");
  console.log(req.body);

  res.status(200).json({
    success: true,
    message: "Webhook diterima",
    data: req.body
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
