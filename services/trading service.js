const market = require("./marketService");
const indicator = require("./indicatorService");
const structure = require("./structureService");

function analyze(closes, candles) {

    const ema20 = indicator.calculateEMA(20, closes);

    const trend = structure.detectStructure(candles);

    return {

        market: market.getMarketData(),

        ema20,

        trend

    };

}

module.exports = {
    analyze
};
