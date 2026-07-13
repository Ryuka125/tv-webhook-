const tradingService = require("../services/tradingService");

function webhook(req, res) {

    try {

        const result = tradingService.analyze(
            req.body.closes || [],
            req.body.candles || []
        );

        res.json(result);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            status: "ERROR",
            message: err.message
        });

    }

}

module.exports = {
    webhook
};
