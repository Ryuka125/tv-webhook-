const state = require("../data/state");

function connectWebSocket() {

    console.log("WebSocket Service Running...");

    state.connected = true;

}

module.exports = connectWebSocket;
