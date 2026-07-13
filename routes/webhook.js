const express = require("express");
const router = express.Router();

const trading = require("../services/tradingService");

router.post("/", (req, res) => {

    const result = trading.analyze(
        req.body.closes || [],
        req.body.candles || []
    );

    res.json(result);

});

module.exports = router;
