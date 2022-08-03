const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

//view engine
app.set('view engine', 'ejs')

//static
app.use(express.static('public'))

//bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.render('index')
    console.log('teste')
})

//database
connection.authenticate().then(() => {
    console.log('Conexão feita com sucesso')
}).catch((err) => {
    console.log(err)
})




app.listen(8080, () => {
    console.log('Servidor rodando')
})