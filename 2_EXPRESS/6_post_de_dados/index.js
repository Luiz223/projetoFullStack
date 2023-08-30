const express = require('express')
const { format } = require('path')
const app = express()

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.post('/usuarios/enviar', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email

    console.log(`
        Usuari: ${nome}
        Email: ${email}
    `)

    res.redirect('/')
})

app.get('/usuarios/cadastrar', (req, res) => {
    res.sendFile(`${basePath}/form.html`)
})

app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id

    console.log(`usuario: ${id}`)

    res.sendFile(`${basePath}/usuarios.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(3000)