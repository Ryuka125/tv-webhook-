require("dotenv").config();

const express = require("express");

const marketService = require("./services/marketService");

const orderService = require("./services/orderService");

const websocketService = require("./services/websocketService");

const webhookRoute = require("./routes/webhook");

const app = express();

app.use(express.json());

app.use("/", webhookRoute);

const PORT = process.env.PORT || 8080;

marketService.startMarket();

websocketService.startSocket();

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
