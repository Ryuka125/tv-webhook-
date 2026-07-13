require("dotenv").config();

const express = require("express");

const config = require("./config/config");

const logger = require("./utils/logger");

const marketService = require("./services/marketService");

const orderService = require("./services/orderService");

const accountService = require("./services/accountService");

const websocketService = require("./services/websocketService");

const webhookRoute = require("./routes/webhook");

const statusRoute = require("./routes/status");

const healthRoute = require("./routes/health");

const app = express();

app.use(express.json());

app.use("/status", statusRoute);

app.use("/health", healthRoute);

app.use("/", webhookRoute);

const PORT = process.env.PORT || 8080;

marketService.startMarket();

accountService.checkAccount();

websocketService.startSocket();

app.listen(config.PORT, () => {
    logger.info(`Server Running on Port ${config.PORT}`);
});
