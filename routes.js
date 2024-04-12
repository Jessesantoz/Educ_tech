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
    
    app.get('/tutoriais', function(req, res) {
        res.render('tutoriais')
    })
    
    app.get('/ferramentas', function(req, res) {
        res.render('ferramentas', {ferramentas: ferramentas})
    })

    app.get('/artigos', function(req, res) {
        res.render('artigos', {artigos: artigos})
    })

    app.get('/ferramenta/:indice', function(req, res) {
        const indice = req.params.indice

        for(let i =0; i<ferramentas.length; i++){
            if(indice.toLocaleUpperCase() == (ferramentas[i].titulo).toLocaleUpperCase()){
        res.render('ferramenta', { ferramentas: ferramentas[i] })
            }
        }
    })

    app.get('/artigo/:indice', function(req, res) {
        const indice = req.params.indice

        for(let i =0; i<artigos.length; i++){
            if(indice.toLocaleUpperCase() == (artigos[i].titulo).toLocaleUpperCase()){
        res.render('artigo', { artigos: artigos[i] })
            }
        }
    })

    app.get('/participe', function(req, res) {
        res.render('participe')
    })

    app.get('/colaboradores', function(req, res) {
        res.render('colaboradores', {colaboradores: colaboradores})
    })

}

module.exports = routes