const express = require('express');//importa o modulo express
const routes = require('./routes');//importa o arquivo de rotas para o servidor

const app = express();

 app.use(routes);//a aplicação usa agora o arquivo de rotas

const PORT = 3333;//constante onde informamos qual porta a apliacação usará
app.listen(PORT, () => {
    console.log('Servidor iniciado na porta 3333')
    console.log('Para derrubar o servidor: CTRL + C')
    console.log('mgbs@discente.ifpe.edu.br')
    console.log('https://github.com/miguelgabriel01')
})
