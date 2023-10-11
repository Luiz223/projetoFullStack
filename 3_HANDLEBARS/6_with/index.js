const express = require("express")
const exphbs = require("express-handlebars")



const app = express()

//configurando o handlebars com template engine
app.engine('handlebars', exphbs.engine()) 
app.set('view engine', 'handlebars')

//rotas
app.get('/post', (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Aqui você vai aprender Noje.js",
        comments: 4
    }

    res.render('post', {post})
})

app.get('/dashboard', (req, res) =>{
    const items = ['item A', 'item B',  'item C']

    res.render('dashboard', {items})
})

app.get('/', (req, res) => {
    const usuario = {
        nome: "Luiz",
        profissao: "Dev",
        idade: 20
    }

    const auth = true

    res.render('home', {usuario, auth})
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})