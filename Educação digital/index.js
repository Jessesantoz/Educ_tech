const express = require("express")
const app = express()
const local = 8000

const routes = require('./routes.js')
routes(app)

app.set('view engine', 'ejs')

app.listen(local, function(res, req){
    console.log('o servidor está em funcionamento!')
})