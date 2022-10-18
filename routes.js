const lista = require("./db/lista")
const ferramentas = require("./db/ferramentas")

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

    app.get('/participe', function(req, res) {
        res.render('participe')
    })

    app.post('/paraticipe', (req, res) => {
        const {nome, participacao} = req.body
        const errors = []

        console.log(req.body)

        if (!nome) {
            errors.push("O nome é obrigatorio")
        } 
        if (!participacao){
            errors.push("A participação é obrigatoria")
        }
    
        const novoNome = {
            nome,
            participacao
        }

        if (errors.length > 0) {
            res.status(401).json({msgs: errors})
            return
        }
    
        lista.push(novoNome)
        res.status(200).json({msg: 'dados gravados com sucesso'})
        //res.render('confirmação')
    })

}

module.exports = routes