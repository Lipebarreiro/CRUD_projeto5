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
    const nome_cliente = req.body.nome_cliente
    const cpf = req.body.cpf
    const email = req.body.email
    const telefone = req.body.telefone
    const endereco_cliente = req.body.endereco_cliente
    const id_do_consorcio = req.body.id_do_consorcio
    const id_do_emprestimo = req.body.id_do_emprestimo
    const id_do_cartao = req.body.id_do_cartao
    const id_da_agencia = req.body.id_da_agencia

    const sql = `INSERT INTO clientes (nome_cliente,cpf,email,telefone,endereco_cliente,id_do_consorcio,id_do_emprestimo,id_do_cartao,id_da_agencia) VALUES ('${nome_cliente}','${cpf}','${email}','${telefone}','${endereco_cliente}','${id_do_consorcio}','${id_do_emprestimo}','${id_do_cartao}','${id_da_agencia}')`

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
app.get('/prod/:id_do_cliente', (req, res) => {
    const id_do_cliente = req.params.id_do_cliente

    const sql = `SELECT * FROM clientes WHERE id_do_cliente = ${id_do_cliente}`

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
app.get('/prod/edit/:id_do_cliente', (req, res) => {
    const id_do_cliente = req.params.id_do_cliente
    const sql = `SELECT * FROM clientes where id_do_cliente = ${id_do_cliente}`

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
    const id_do_cliente = req.body.id_do_cliente
    const nome_cliente = req.body.nome_cliente
    const cpf = req.body.cpf
    const email = req.body.email
    const telefone = req.body.telefone
    const endereco_cliente = req.body.endereco_cliente
    const id_do_consorcio = req.body.id_do_consorcio
    const id_do_emprestimo = req.body.id_do_emprestimo
    const id_do_cartao = req.body.id_do_cartao
    const id_da_agencia = req.body.id_da_agencia



    const sql = `UPDATE clientes SET nome_cliente = '${nome_cliente}', cpf = '${cpf}', email = '${email}', telefone = '${telefone}', endereco_cliente = '${endereco_cliente}', id_do_consorcio = '${id_do_consorcio}', id_do_emprestimo = '${id_do_emprestimo}', id_do_cartao = '${id_do_cartao}', id_da_agencia = '${id_da_agencia}' WHERE id_do_cliente = ${id_do_cliente}`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/prod')
    })
})

// deletar registro
app.get('/prod/remove/:id_do_cliente', (req, res) => {
    const id_do_cliente = req.params.id_do_cliente

    const sql = `DELETE FROM clientes WHERE id_do_cliente = '${id_do_cliente}'`

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
    const id_do_cliente = req.body.id_do_cliente

    const sql = `SELECT * FROM clientes WHERE id_do_cliente = ${id_do_cliente}`

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

//conexao com o banco de dados
const conn = mysql.createConnection({
    host: 'localhost',
    port: '3307', //mudar a porta de acordo com xampp
    user: 'root',
    password: '',
    database: 'banco' //  muda o nome do banco de vcs

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
