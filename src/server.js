const express = require('express');//importa o modulo express
const routes = require('./routes');//importa o arquivo de rotas para o servidor

const app = express();

app.use(express.json())//responsavel pela aplicação receber dados em formato json
app.use(routes);//a aplicação usa agora o arquivo de rotas

//configuração do midleware
app.use(( error,req,res,next) => {
    res.status(error.status || 500)//error 500( erro interno do servidor )
    res.json({ error: error.message})
})


const PORT = 3333;//constante onde informamos qual porta a apliacação usará
app.listen(PORT, () => {
    console.log('Servidor iniciado na porta 3333')
    console.log('Para derrubar o servidor: CTRL + C')
    console.log('mgbs@discente.ifpe.edu.br')
    console.log('https://github.com/miguelgabriel01')
})
