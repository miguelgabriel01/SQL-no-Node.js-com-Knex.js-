const express = require('express');//importa o modulo express
const app = express();

 

const PORT = 3333;//constante onde informamos qual porta a apliacação usará
app.listen(PORT, () => {
    console.log('Servidor iniciado na porta 3333')
    console.log('Para derrubar o servidor: CTRL + C')
    console.log('mgbs@discente.ifpe.edu.br')
    console.log('https://github.com/miguelgabriel01')
})
