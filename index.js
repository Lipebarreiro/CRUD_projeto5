// imports
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const port = 3000;

//  express
const app = express()

// configurar o handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

// rotas
app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.use(
    express.urlencoded({
        extended: true
    })
)

// inserir dados dos clientes
app.post('/prod/insertprod', (req, res) => {
    const nome = req.body.nome
    const idade = req.body.idade
    const email = req.body.email
    const telefone = req.body.telefone
    const endereco = req.body.endereco
    const numero_da_conta = req.body.numero_da_conta
    const tipo_de_conta = req.body.tipo_de_conta
    const agencia = req.body.agencia
    const gerente = req.body.gerente

    const sql = `INSERT INTO clientes (nome,idade,email,telefone,endereco,numero_da_conta,tipo_de_conta,agencia,gerente) VALUES ('${nome}','${idade}','${email}','${telefone}','${endereco}','${numero_da_conta}','${tipo_de_conta}','${agencia}','${gerente}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
        console.log("Cadastro com sucesso")
    })
})

// consulta geral
app.get('/prod', (req, res) => {

    const sql = 'SELECT * FROM clientes'
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

// consulta um registro pelo id(produto.handlebars)
app.get('/prod/:id', (req, res) => {
    const id = req.params.id

    const sql = `SELECT * FROM clientes WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listarProd = data[0]

        res.render('clientes', { layout: false, listarProd })
    })
})

// pegando editar registro
app.get('/prod/edit/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM clientes where id = ${id}`

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
    const endereco = req.body.endereco
    const numero_da_conta = req.body.numero_da_conta
    const tipo_de_conta = req.body.tipo_de_conta
    const agencia = req.body.agencia
    const gerente = req.body.gerente


    const sql = `UPDATE clientes SET nome = '${nome}', idade = '${idade}', email = '${email}', telefone = '${telefone}', endereco = '${endereco}', numero_da_conta = '${numero_da_conta}', tipo_de_conta = '${tipo_de_conta}', agencia = '${agencia}', gerente = '${gerente}' WHERE id = ${id}`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/prod')
    })
})

// deletar registro
app.get('/prod/remove/:id', (req, res) => {
    const id = req.params.id

    const sql = `DELETE FROM clientes WHERE id = '${id}'`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/prod')
    })
})

// busca de resgistro
//rota de busca (busc) que enviar para view cliente cliente.handlebars
app.post('/busc/', (req, res) => {
    const id = req.body.id

    const sql = `SELECT * FROM clientes WHERE id = ${id}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const listarProd = data[0]
        res.render('clientes', { layout: false, listarProd })
    })
})

//rota do buscar
app.get('/busca', (req, res) => {
    res.render('busca', { layout: false })
})

//conexao bd
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3306', //mudar a porta de acordo com xampp
    user: 'root',
    password: '',
    database: 'resilia_dados' //  muda o nome do banco de vcs

})

conn.connect(function (err) {
    if (err) {
        console.log(err)
    }

    console.log("Conectado com sucesso!")
});

// servidor
app.listen(port, () => {
    console.log(`app rodando ${port}`)
});