const express = require("express");

const state = require("./data/state");

const updateMarket = require("./services/market");

const statusRoute = require("./routes/status");

const webhookRoute = require("./routes/webhook");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8080;

// Update market setiap 5 detik
updateMarket();

setInterval(updateMarket, 5000);

// Routes
app.use("/status", statusRoute);

app.use("/webhook", webhookRoute);

app.get("/", (req, res) => {

    res.send("Trading Bot Online");

});

app.listen(PORT, () => {

    console.log("========================");
    console.log("Server berjalan");
    console.log("Port :", PORT);
    console.log("========================");

});
