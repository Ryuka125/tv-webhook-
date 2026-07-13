require("dotenv").config();

const express = require("express");

const websocket = require("./services/websocketService");

const market = require("./services/marketService");

const logger = require("./middlewares/logger");

const app = express();

app.use(express.json());

app.use(logger);

//app.use("/", webhookRoute);

websocket.startWebSocket();

app.get("/", (req, res) => {

    res.json(market.getMarketData());

});

app.listen(process.env.PORT || 8080);
