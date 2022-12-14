const express = require("express")
const app = express()
const local = 8000
const path = require('path')

const bodyParser = require('body-parser')
const routes = require('./routes.js')
routes(app)

app.use(express.static('./app/public'))
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

app.set('views', path.join( __dirname , '/view'))

app.listen(local, function(res, req){
    console.log('o servidor está em funcionamento!')
})