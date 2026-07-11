const https = require("https");
const express = require("express");
const WebSocket = require("ws");

const app = express();

const PORT = process.env.PORT || 3000;

let lastPrice = 0;
let candles = [];
let connected = false;

// Website
app.get("/", (req, res) => {
    res.send("Trading Bot Online");
});

// Status bot
app.get("/status", (req, res) => {
    res.json({
        status: connected ? "CONNECTED" : "DISCONNECTED",
        symbol: "BTCUSDT",
        price: lastPrice
    });
});

// Koneksi WebSocket Binance
const ws = new WebSocket(
    "wss://stream.binance.com:9443/ws/btcusdt@trade"
);

function loadCandles() {

    https.get(
        "https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=100",
        res => {

            let data = "";

            res.on("data", chunk => data += chunk);

            res.on("end", () => {

                candles = JSON.parse(data);

                console.log(
                    "Candles berhasil diambil:",
                    candles.length
                );

            });

        }
    );

}

ws.on("open", () => {
    connected = true;
    console.log("✅ Terhubung ke Binance");
});

ws.on("message", (data) => {

    const json = JSON.parse(data);

    lastPrice = Number(json.p);

    console.clear();
    console.log("====================");
    console.log("BTCUSDT");
    console.log("Harga :", lastPrice);
    console.log("Waktu :", new Date().toLocaleString());
    console.log("====================");

});

ws.on("close", () => {
    connected = false;
    console.log("❌ WebSocket ditutup");
});

ws.on("error", (err) => {
    connected = false;
    console.log("ERROR :", err.message);
});

app.listen(PORT, () => {
    loadCandles();

setInterval(loadCandles,60000);
    console.log("Server berjalan di port", PORT);
});
