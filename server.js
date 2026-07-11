const express = require("express");
const Binance = require("binance-api-node").default;

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Web agar Railway tidak menganggap aplikasi mati
app.get("/", (req, res) => {
    res.send("Trading Bot Online");
});

// Client Binance (tanpa API Key dulu)
const client = Binance();

// Harga terakhir
let lastPrice = 0;

// WebSocket BTCUSDT
client.ws.ticker("BTCUSDT", ticker => {

    lastPrice = Number(ticker.curDayClose);

    console.clear();

    console.log("===============");
    console.log("BTCUSDT");
    console.log("Harga :", lastPrice);
    console.log("Waktu :", new Date().toLocaleString());
    console.log("===============");

});

// Endpoint status
app.get("/status", (req,res)=>{

    res.json({

        status:"ONLINE",

        symbol:"BTCUSDT",

        price:lastPrice

    });

});

app.listen(PORT,()=>{

    console.log("Server berjalan di port",PORT);

});
