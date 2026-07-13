const Binance = require("binance-api-node").default;

const client = Binance();

let lastPrice = 0;

function startWebSocket(symbol = "BTCUSDT") {

    client.ws.ticker(symbol, (ticker) => {

        lastPrice = Number(ticker.curDayClose);

    });

}

function getPrice() {
    return lastPrice;
}

module.exports = {
    startWebSocket,
    getPrice
};
