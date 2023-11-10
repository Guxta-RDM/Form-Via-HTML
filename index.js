import express from 'express';

/*exemplo de importação usando type:'common.js'
express = require('express');*/

const porta = 3000;
const host = '0.0.0.0';

const app = express();

//Indicando para a aplicação como servir arquivos estáticos 
app.use(express.static('./Paginas'));

app.get('/', (requisicao, resposta) => {
    resposta.end(`
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

app.listen(porta, host,() => {
    console.log(`Servidor rodando na url http://${host}:${porta}`);
});
