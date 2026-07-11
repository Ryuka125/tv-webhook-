module.exports = (app) => {

    app.post("/webhook", (req, res) => {

        console.log(req.body);

        res.json({

            success: true

        });

    });

};
