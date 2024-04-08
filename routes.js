const lista = require("./db/lista")
const colaboradores = require("./db/colaboradores")
const ferramentas = require("./db/ferramentas")
const artigos = require("./db/artigos")

function routes(app) {

    app.get('/', function(req, res) {
        res.render('index')
    })

    app.get('/comunidade', function(req, res) {
        res.render('comunidade')
    })

    app.get('/autores', function(req, res) {
        res.render('autores', {lista: lista})
    })

    app.get('/ferramentas', function(req, res) {
        res.render('ferramentas', {ferramentas: ferramentas})
    })

    app.get('/tutoriais', function(req, res) {
        res.render('tutoriais')
    })

    app.get('/artigo', function(req, res) {
        res.render('artigo', {artigos: artigos})
    })

    app.get('/participe', function(req, res) {
        res.render('participe')
    })

    app.get('/colaboradores', function(req, res) {
        res.render('colaboradores', {colaboradores: colaboradores})
    })

}

module.exports = routes