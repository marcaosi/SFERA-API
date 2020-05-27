const express = require('express')
const app = express()

const routes = require('./app/routes')

app.use(express.json())

app.use(routes)

app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(3001, (err) => {
    if(err){
        console.log("Erro ao subir servidor..")
    }else{
        console.log("Servidor rodando na porta 3001...")
        console.log("http://localhost:3001/")
    }
})