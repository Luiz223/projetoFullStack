const express = require('express')
const app = express()
const path = require('path')
const basePath = path.join(__dirname, 'templates')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${basePath}/index.html`)
})
app.get('/index/cadastro', (req, res) => {
    res.sendFile(`${basePath}/cadastro.html`)
})
app.post('/cadastro/enviar', (req, res) =>{
    const nome = req.body.nome
    const nemail = req.body.email
    const nsenha = req.body.senha

    console.log(`
    Usuario: ${nome}
    Email: ${nemail}
    Senha: ${nsenha}`)
    res.redirect('/')
})
app.listen(3000)