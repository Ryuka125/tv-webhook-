module.exports = (app, state) => {

    app.get("/status", (req, res) => {

        res.json({
            status: state.connected ? "CONNECTED" : "DISCONNECTED",
            symbol: state.symbol,
            price: state.price,
            signal: state.signal
        });

    });

};
