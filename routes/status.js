const express = require("express");

const router = express.Router();

const config = require("../config/config");

router.get("/", (req, res) => {

    res.json({

        status: "ONLINE",

        exchange: "Binance",

        symbol: config.SYMBOL,

        interval: config.INTERVAL,

        price: 0,

        signal: "HOLD",

        trend: "SIDEWAYS",

        position: "NONE",

        websocket: "CONNECTED",

        webhook: "ACTIVE",

        serverTime: new Date().toISOString(),

        uptime: process.uptime()

    });

});

module.exports = router;
