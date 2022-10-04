function routes(app) {

    app.get('/', function(req, res) {
        res.render(__dirname + '/view/index')
    })

    app.get('/comunidade', function(req, res) {
        res.render(__dirname + '/view/comunidade')
    })

    app.get('/autores', function(req, res) {
        res.render(__dirname + '/view/autores')
    })

    app.get('/ferramentas', function(req, res) {
        res.render(__dirname + '/view/ferramentas')
    })

    app.get('/tutoriais', function(req, res) {
        res.render(__dirname + '/view/tutoriais')
    })

}

module.exports = routes