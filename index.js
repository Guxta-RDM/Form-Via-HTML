import express from 'express';

/*exemplo de importação usando type:'common.js'
express = require('express');*/

const porta = 3000;
const host = '0.0.0.0';

const app = express();

//Indicando para a aplicação como servir arquivos estáticos 
app.use(express.static('./Paginas'));

app.listen(porta, host,() => {
    console.log('Servidor rodando na url http://$(host):$(porta)')
});
