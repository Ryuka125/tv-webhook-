const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Trading Bot Running");
});

router.post("/webhook", (req, res) => {

    console.log(req.body);

    res.json({
        success:true
    });

});

module.exports = router;
