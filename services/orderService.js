console.log("Order Service Running...");

function buy(symbol) {
    console.log(`BUY ${symbol}`);
}

function sell(symbol) {
    console.log(`SELL ${symbol}`);
}

module.exports = {
    buy,
    sell
};
