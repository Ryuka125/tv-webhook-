const state = require("../data/state");

module.exports = (app) => {

    app.get("/status", (req, res) => {

        res.json(state);

    });

};
