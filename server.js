const express = require("express");
const Binance = require("binance-api-node").default;

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

const client = Binance();

let lastPrice = 0;
let ema20 = 0;
let ema50 = 0;
let signal = "WAIT";

let closes = [];

// ===============================
// Hitung EMA
// ===============================
function calculateEMA(period, prices) {

    if (prices.length < period)
        return null;

    const multiplier = 2 / (period + 1);

    let ema =
        prices.slice(0, period).reduce((a, b) => a + b, 0) / period;

    for (let i = period; i < prices.length; i++) {

        ema =
            ((prices[i] - ema) * multiplier) + ema;

    }

    return Number(ema.toFixed(2));
}

// ===============================
// Ambil Candle Binance
// ===============================
async function updateEMA() {

    try {

        const candles = await client.candles({
            symbol: "BTCUSDT",
            interval: "1m",
            limit: 100
        });

        closes = candles.map(c => Number(c.close));

        lastPrice = closes[closes.length - 1];

        ema20 = calculateEMA(20, closes);

        ema50 = calculateEMA(50, closes);

        if (ema20 && ema50) {

            if (ema20 > ema50)
                signal = "BUY";

            else if (ema20 < ema50)
                signal = "SELL";

            else
                signal = "WAIT";

        }

        console.clear();

        console.log("======================");
        console.log("BTCUSDT");
        console.log("Price :", lastPrice);
        console.log("EMA20 :", ema20);
        console.log("EMA50 :", ema50);
        console.log("Signal:", signal);
        console.log("======================");

    } catch (err) {

        console.log(err.message);

    }

}

setInterval(updateEMA, 5000);

updateEMA();

// ===============================
// Home
// ===============================
app.get("/", (req, res) => {

    res.send("Trading Bot Online");

});

// ===============================
// Status
// ===============================
app.get("/status", (req, res) => {

    res.json({

        status: "CONNECTED",

        symbol: "BTCUSDT",

        price: lastPrice,

        ema20,

        ema50,

        signal

    });

});

// ===============================
// Webhook
// ===============================
app.post("/webhook", (req, res) => {

    console.log("Webhook:");

    console.log(req.body);

    res.json({

        success: true

    });

});

// ===============================
app.listen(PORT, () => {

    console.log("Server berjalan di port", PORT);

});
