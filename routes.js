const lista = require("./db/lista")
const ferramentas = require("./db/ferramentas")

function routes(app) {

    app.get('/', function(req, res) {
        res.render('index')
    })

    app.get('/comunidade', function(req, res) {
        res.render('comunidade', {lista: lista})
    })

    app.get('/autores', function(req, res) {
        res.render('autores')
    })

    app.get('/ferramentas', function(req, res) {
        res.render('ferramentas', {ferramentas: ferramentas})
    })

    app.get('/tutoriais', function(req, res) {
        res.render('tutoriais')
    })

    app.get('/participe', function(req, res) {
        res.render('participe')
    })
}

module.exports = routes