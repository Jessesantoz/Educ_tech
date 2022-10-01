function routes(app) {

    app.get('/', function(req, res) {
        res.render(__dirname + '/view/index')
    })

    app.get('/comunidade', function(req, res) {
        res.render(__dirname + '/view/comunidade')
    })

}

module.exports = routes