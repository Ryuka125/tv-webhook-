const logger = require("../utils/logger");

function startSocket() {
    logger.info("WebSocket Connected");
}

module.exports = {
    startSocket
};
