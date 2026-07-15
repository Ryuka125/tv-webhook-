let state = {

    exchange: "Binance",

    symbol: "BTCUSDT",

    interval: "1m",

    price: 0,

    signal: "HOLD",

    trend: "SIDEWAYS",

    position: "NONE",

    websocket: "DISCONNECTED",

    webhook: "ACTIVE"

};

function getState() {

    return state;

}

function updateState(data) {

    state = {

        ...state,

        ...data

    };

}

module.exports = {

    getState,

    updateState

};
