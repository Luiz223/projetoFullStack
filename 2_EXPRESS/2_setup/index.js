const express = require('express')
const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Um texto qualquer')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})