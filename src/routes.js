//Arquivos de rotas da aplicação
const express = require('express');//importa o express
const routes = express.Router();

//importo o controller de usuarios
const UsersController = require('./controllers/UsersController')
 
//rota responsavel por listar todos os usuarios cadastrados
routes.get('/users', UsersController.index)

module.exports = routes;//exporta o arquivo de rotas
