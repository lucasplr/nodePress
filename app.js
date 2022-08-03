const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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

//teste



app.listen(8080, () => {
    console.log('Servidor rodando')
})