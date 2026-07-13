const logger = require("../utils/logger");

function buy(symbol) {
    logger.info(`BUY ${symbol}`);
}

function sell(symbol) {
    logger.info(`SELL ${symbol}`);
}

module.exports = {
    buy,
    sell
};
