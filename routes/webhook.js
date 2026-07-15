const express = require("express");
const router = express.Router();

const engine = require("../strategy/engine");

router.get("/", (req, res) => {
    res.send("Trading Bot Running");
});

router.post("/webhook", (req, res) => {

    const signal = engine.execute(req.body);

    res.json({
        success: true,
        signal
    });

});

module.exports = router;
