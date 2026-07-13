const { client } = require("./marketService");
const logger = require("../utils/logger");

async function checkAccount() {

    try {

        const account = await client.accountInfo();

        logger.info("Binance Connected");

        logger.info(`Asset : ${account.balances.length}`);

    } catch (err) {

        logger.error(err.message);

    }

}

module.exports = {
    checkAccount
};
