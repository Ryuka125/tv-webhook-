require("dotenv").config();

const express = require("express");

const webhookRoute = require("./routes/webhook");

const app = express();

app.use(express.json());

app.use("/", webhookRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
