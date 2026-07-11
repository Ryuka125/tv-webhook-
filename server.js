const https = require("https");
const express = require("express");
const WebSocket = require("ws");

const app = express();

const PORT = process.env.PORT || 3000;

let lastPrice = 0;
let candles = [];
let ema20 = 0;
let ema50 = 0;
let trend = "SIDEWAYS";
let connected = false;

if (ema20 > ema50) {
    trend = "BUY";
} else if (ema20 < ema50) {
    trend = "SELL";
} else {
    trend = "SIDEWAYS";
}

// Website
app.get("/", (req, res) => {
    res.send("Trading Bot Online");
});

// Status bot
app.get("/status", (req, res) => {
    res.json({
    status: connected ? "CONNECTED" : "DISCONNECTED",
    symbol: "BTCUSDT",
    price: lastPrice,
    candles: candles.length,
    ema20,
    ema50,
    trend
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
                 const closes = candles.map(c => Number(c[4]));

                  ema20 = calculateEMA(20, closes);

                  ema50 = calculateEMA(50, closes);

                 console.log("EMA20 :", ema20);
                console.log("EMA50 :", ema50);

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
    function calculateEMA(period, closes) {

    const multiplier = 2 / (period + 1);

    let ema = closes[0];

    for (let i = 1; i < closes.length; i++) {
        ema = (closes[i] - ema) * multiplier + ema;
    }

    return ema;
         }

setInterval(loadCandles,60000);
    console.log("Server berjalan di port", PORT);
});
