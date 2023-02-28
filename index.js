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

app.use(express.static('publico'))

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

// inserir dados na tabela clientes
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

// inserir dados na tabela emprestimo
app.post('/emp/insertemp', (req, res) => {
    const nome = req.body.nome_cliente
    const emprestimo = req.body.emprestimo
    const parcelas = req.body.parcelas
    const juros = req.body.juros
    const data = req.body.data
    const sql = `INSERT INTO emprestimo (nome,valor_emprestimo,parcelas,juros,data) VALUES ('${nome}','${emprestimo}','${parcelas}','${juros}','${data}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
        console.log("Cadastro com sucesso")
    })
})


// consulta geral
app.get('/emp', (req, res) => {

    const sql = 'SELECT * FROM emprestimo'
    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listar = data

        console.log(listar)

        res.render('emp', { layout: false, listar })
    })
})

// consulta um registro pelo id(produto.handlebars)
app.get('/emp/:id_do_emprestimo', (req, res) => {
    const id_do_emprestimo = req.params.id_do_emprestimo

    const sql = `SELECT * FROM emprestimo WHERE id_do_emprestimo = ${id_do_emprestimo}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listarEmp = data[0]

        res.render('emprestimo', { layout: false, listarEmp })
    })
})

// pegando editar registro
app.get('/emp/editE/:id_do_emprestimo', (req, res) => {
    const id_do_emprestimo = req.params.id_do_emprestimo
    const sql = `SELECT * FROM emprestimo where id_do_emprestimo = ${id_do_emprestimo}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const emp = data[0]
        res.render('editE', { layout: false, emp })
    })
})

// editando o registro com post 
app.post('/emp/updateemp', (req, res) => {
    const id_do_emprestimo = req.body.id_do_emprestimo
    const nome = req.body.nome
    const valor = req.body.emprestimo
    const parcelas = req.body.parcelas
    const juros = req.body.juros
    const data = req.body.data


    const sql = `UPDATE emprestimo SET nome = '${nome}', valor_emprestimo = '${valor}', parcelas = '${parcelas}', juros = '${juros}', data = '${data}' WHERE id_do_emprestimo = ${id_do_emprestimo}`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/emp')
    })
})

// deletar registro
app.get('/emp/remove/:id_do_emprestimo', (req, res) => {
    const id_do_emprestimo = req.params.id_do_emprestimo

    const sql = `DELETE FROM emprestimo WHERE id_do_emprestimo = '${id_do_emprestimo}'`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/emp')
    })
})

// busca de resgistro
//rota de busca (busque) que enviar para view emprestimo.handlebars
app.post('/busque/', (req, res) => {
    const id_do_emprestimo = req.body.emprestimo

    const sql = `SELECT * FROM emprestimo WHERE id_do_emprestimo = ${id_do_emprestimo}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const listarEmp = data[0]
        res.render('emprestimo', { layout: false, listarEmp })
    })
})

























// inserir dados na tabela agencia
app.post('/age/insertage', (req, res) => {
    const endereco = req.body.endereco
    const email = req.body.email
    const telefone = req.body.telefone

    const sql = `INSERT INTO agencia (endereco,email,telefone) VALUES ('${endereco}','${email}','${telefone}')`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
        }

        res.redirect('/')
        console.log("Cadastro com sucesso")
    })
})


// consulta geral agencia
app.get('/age', (req, res) => {

    const sql = 'SELECT * FROM agencia'
    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listar = data

        console.log(listar)

        res.render('age', { layout: false, listar })
    })
})

// consulta um registro pelo id(produto.handlebars)
app.get('/age/:id_da_agencia', (req, res) => {
    const id_da_agencia = req.params.id_da_agencia

    const sql = `SELECT * FROM agencia WHERE id_da_agencia = ${id_da_agencia}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const listarAge = data[0]

        res.render('agencia', { layout: false, listarAge })
    })
})

// pegando editar registro
app.get('/age/editA/:id_da_agencia', (req, res) => {
    const id_da_agencia = req.params.id_da_agencia
    const sql = `SELECT * FROM agencia where id_da_agencia = ${id_da_agencia}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }

        const age = data[0]
        res.render('editA', { layout: false, age })
    })
})

// editando o registro com post 
app.post('/age/updateage', (req, res) => {
    const id_da_agencia = req.body.id_da_agencia
    const endereco = req.body.endereco
    const email = req.body.email
    const telefone = req.body.telefone


    const sql = `UPDATE agencia SET endereco = '${endereco}', email = '${email}', telefone = '${telefone}' WHERE id_da_agencia = ${id_da_agencia}`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/age')
    })
})

// deletar registro
app.get('/age/remove/:id_da_agencia', (req, res) => {
    const id_da_agencia = req.params.id_da_agencia

    const sql = `DELETE FROM agencia WHERE id_da_agencia = '${id_da_agencia}'`

    conn.query(sql, function (err) {
        if (err) {
            console.log(err)
            return
        }
        res.redirect('/age')
    })
})

// busca de resgistro
//rota de busca (busque) que enviar para view emprestimo.handlebars
app.post('/buscaA/', (req, res) => {
    const id_da_agencia = req.body.id_da_agencia

    const sql = `SELECT * FROM agencia WHERE id_da_agencia = ${id_da_agencia}`

    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err)
            return
        }
        const listarAge = data[0]
        res.render('agencia', { layout: false, listarAge })
    })
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


