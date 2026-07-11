const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Import Routes
const statusRoute = require("./routes/status");
const webhookRoute = require("./routes/webhook");

// Import Services
const connectWebSocket = require("./services/websocket");
const updateMarket = require("./services/market");

// Middleware
app.use(express.json());

// Register Routes
statusRoute(app);
webhookRoute(app);

// Home
app.get("/", (req, res) => {
    res.send("Trading Bot Online 🚀");
});

// Jalankan Service
connectWebSocket();

updateMarket();

// Update market setiap 5 detik
setInterval(updateMarket, 5000);

// Start Server
app.listen(PORT, () => {
    console.log("========================");
    console.log("Trading Bot Running");
    console.log("Port :", PORT);
    console.log("========================");
});
