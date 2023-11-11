import express from 'express';

/*exemplo de importação usando type:'common.js'
express = require('express');*/

const porta = 3000;
const host = '0.0.0.0';

var listaUSU = [];

function processaCAD_USU (requisicao, resposta){
    const usu = 
    {
        nome: requisicao.query.Nome,
        sobrenome: requisicao.query.Sobrenome,
        nomeUSUARIO: requisicao.query.NomeUsuario,
        email: requisicao.query.Email,
        celular: requisicao.query.NumeroCEL,
    };

    listaUSU.push(usu);

    let conteudoResposta = 
    `
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <title>Cadastro de Usuário</title>
    </head>
    <body>
        <h1>Usuários Cadastrados</h1>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Sobrenome</th>
                    <th>Nome de Usuário</th>
                    <th>Email</th>
                    <th>Celular</th>
                </tr>
            </thead>
            <tbody>`;

        for (const usu of listaUSU){
            conteudoResposta += `
                <tr>
                    <td>${usu.nome}</td>
                    <td>${usu.sobrenome}</td>
                    <td>${usu.nomeUSUARIO}</td>
                    <td>${usu.email}</td>
                    <td>${usu.celular}</td>
                </tr>
            `;
        }

    conteudoResposta += `
            </tbody>
        </table>
        <a class="btn btn-primary" href="/" role="button">Voltar ao Menu</a>
        <a class="btn btn-outline-info" href="/cadastro.html" role="button">Acessar Cadastro</a>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>    
    </body>
    </html>
        `;
    resposta.end(conteudoResposta);
}

const app = express();

//Indicando para a aplicação como servir arquivos estáticos 
app.use(express.static('./Paginas'));

app.get('/', (requisicao, resposta) => {
    resposta.end(`
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="public\favicon.ico">
        <link rel="stylesheet" type="text/css" href="public\style.css">
        <title>Menu do Sistema</title>
    </head>
    <body>
        <h1>MENU</h1>
        <ul>
            <li><a href="/cadastro.html">Cadastro</a></li>
        </ul>
    </body>
    </html>
    `)
})

app.get('/cadastro', processaCAD_USU);

app.get('/public/style.css');

app.get('/public/favicon.ico');

app.listen(porta, host,() => {
    console.log(`Servidor rodando na url http://${host}:${porta}`);
});
