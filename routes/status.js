const express = require("express");

const router = express.Router();

const statusService = require("../services/statusService");

router.get("/", (req, res) => {

    res.json({

        status: "ONLINE",

        uptime: process.uptime(),

        serverTime: new Date().toISOString(),

        ...statusService.getState()

    });

});

module.exports = router;
