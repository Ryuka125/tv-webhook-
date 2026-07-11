const state = require("../data/state");

function updateMarket() {

    console.log("Market Service Running...");

    state.price = state.price + 1;

}

module.exports = updateMarket;
