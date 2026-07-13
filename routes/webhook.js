const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Trading Bot Running");
});

router.get("/status", (req, res) => {
    res.json({
        status: "ONLINE",
        symbol: "BTCUSDT"
    });
});

router.post("/webhook", (req, res) => {

    console.log(req.body);

    res.json({
        success:true
    });

});

module.exports = router;
