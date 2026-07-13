const Binance = require("binance-api-node").default;
const config = require("../config/config");
const logger = require("../utils/logger");

const client = Binance({
    apiKey: config.BINANCE_API_KEY,
    apiSecret: config.BINANCE_SECRET_KEY
});

async function startMarket() {
    try {
        const prices = await client.prices();

        logger.info("Market Service Started");
        logger.info(`${config.SYMBOL} Price : ${prices[config.SYMBOL]}`);
    } catch (err) {
        logger.error(err.message);
    }
}

module.exports = {
    startMarket,
    client
};
