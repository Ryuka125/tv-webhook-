require("dotenv").config();

module.exports = {
    PORT: process.env.PORT || 8080,

    BINANCE_API_KEY: process.env.BINANCE_API_KEY,

    BINANCE_SECRET_KEY: process.env.BINANCE_SECRET_KEY,

    SYMBOL: process.env.SYMBOL || "BTCUSDT",

    INTERVAL: process.env.INTERVAL || "1m",

    LEVERAGE: Number(process.env.LEVERAGE || 10),

    RISK_PERCENT: Number(process.env.RISK_PERCENT || 2)
};
