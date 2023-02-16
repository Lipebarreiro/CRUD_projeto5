// imports
const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');
const port = 3000;

// express
const app = express()

// configurar o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))


// rotas 
app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

//rota do buscar
app.get('/busca', (req, res) => {
    res.render('busca', { layout: false })
})

app.use(
    express.urlencoded({
        extended: true
    })
)

// inserir dados
app.post('/prod/insertprod', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade
    const email = req.body.email
    const telefone = req.body.telefone

    const sql = `INSERT INTO cliente (nome,idade,email,telefone) VALUES ('${nome}','${idade}','${email}','${telefone}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
        console.log("Dados cadastrados com sucesso!")
    })
})

// consulta geral
app.get('/prod', (req, res) => {
    const sql = 'SELECT * FROM cliente'

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listar = data

        console.log(listar)

        res.render('prod', { layout: false, listar })
    })
})

// fim consulta geral

// buscar por formulario
app.post('/busc/', (req, res) => {
    const id = req.body.id

    const sql = `SELECT * FROM cliente WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listarProd = data[0]
        res.render('cliente', { layout: false, listarProd })
    })
})

// consulta um registro pelo id (produto.handlebars)
app.get('/prod/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM cliente WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listarProd = data[0]
        res.render('cliente', { layout: false, listarProd })
    })
})

// pegando para editar registro
app.get('/prod/edit/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM cliente WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const prod = data[0]
        res.render('edit', { layout: false, prod })
    })
})

// editando o registro com post
app.post('/prod/updateprod', (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    const idade = req.body.idade
    const email = req.body.email
    const telefone = req.body.telefone

    const sql = `UPDATE cliente SET nome =  '${nome}', idade = '${idade}', email = '${email}', telefone = '${telefone}' WHERE id = '${id}'`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/prod')
    })
})

// deletando os registros
app.get('/prod/remove/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM cliente WHERE id = '${id}'`

    conn.query(sql, function (err) {
        if (err) {
            console.log
            return
        }

        res.redirect('/prod')
    })
})

//conexao banco de dados
const conn = mysql.createConnection({
    host: '127.0.0.1',
    port: '3307', //muda a porta
    user: 'root',
    password: '',
    database: 'projnode1' //  muda o nome do banco de vcs
})

conn.connect(function (err) {
    if (err) {
        console.log(err)
    }

    console.log("Cadastro com sucesso")
});

// servidor
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
});
