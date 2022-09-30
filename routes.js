function routes(app) {

    app.get('/', function(req, res) {
        res.render(__dirname + '/view/index')
    })

}

module.exports = routes