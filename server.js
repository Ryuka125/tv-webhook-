const express = require("express");

const websocket = require("./services/websocketService");

const market = require("./services/marketService");

const app = express();

app.use(express.json());

websocket.startWebSocket();

app.get("/", (req, res) => {

    res.json(market.getMarketData());

});

app.listen(process.env.PORT || 8080);
