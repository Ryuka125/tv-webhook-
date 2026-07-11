module.exports = (app) => {

    app.post("/webhook", (req, res) => {

        console.log("Webhook diterima:");
        console.log(req.body);

        res.json({
            success: true
        });

    });

};
