const SIGNAL = require("./signal");

const ema = require("./emaStrategy");
const smc = require("./smcStrategy");

const filters = require("./filters");

function execute(candles) {

    if (!filters.trendFilter())
        return SIGNAL.HOLD;

    if (!filters.sessionFilter())
        return SIGNAL.HOLD;

    const emaSignal = ema.checkEMA(candles);

    const smcSignal = smc.checkSMC(candles);

    if (emaSignal === SIGNAL.BUY && smcSignal === SIGNAL.BUY)
        return SIGNAL.BUY;

    if (emaSignal === SIGNAL.SELL && smcSignal === SIGNAL.SELL)
        return SIGNAL.SELL;

    return SIGNAL.HOLD;

}

module.exports = {
    execute
};
