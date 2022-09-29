function routes(app) {

    app.get("/", function(res, req) {
        res.render(__dirname + '/view/index.ejs')
    })

}

module.exports = routes