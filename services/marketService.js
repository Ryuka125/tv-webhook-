const Binance = require("binance-api-node").default;
const config = require("../config/config");
const logger = require("../utils/logger");
const statusService = require("./statusService");

const client = Binance({
    apiKey: config.BINANCE_API_KEY,
    apiSecret: config.BINANCE_SECRET_KEY
});

async function startMarket() {
    try {

        const prices = await client.prices();

        const price = Number(prices[config.SYMBOL]);

        statusService.updateState({
            price: price
        });

        logger.info(`${config.SYMBOL} Price : ${price}`);

    } catch (err) {

        logger.error(err.message);

    }
}

module.exports = {
    startMarket,
    client
};
