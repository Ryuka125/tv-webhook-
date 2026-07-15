const status = require("./statusService");

const logger = require("../utils/logger");

function startSocket() {

    status.updateState({

        websocket: "CONNECTED"

    });

    logger.info("WebSocket Connected");

}

module.exports = {

    startSocket

};
