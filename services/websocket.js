const state = require("../data/state");

function connect() {

    console.log("WebSocket siap dijalankan");

    state.connected = true;

}

module.exports = connect;
