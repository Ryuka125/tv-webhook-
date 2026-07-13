const websocket = require("./websocketService");

function getMarketData() {

    return {

        symbol: "BTCUSDT",

        price: websocket.getPrice()

    };

}

module.exports = {
    getMarketData
};
