//Arquivos de rotas da aplicação
const express = require('express');//importa o express
const routes = express.Router();

//importo o controller de usuarios
const UsersController = require('./controllers/UsersController')
 
routes.get('/users', UsersController.index)//rota responsavel por listar todos os usuarios cadastrados
routes.post('/users', UsersController.create)//rota responsavel por criar usuarios
routes.put('/users/:id', UsersController.update)//rota responsavel por atualizar dados de usuarios
routes.delete('/users/:id', UsersController.delete)//rota responsavel por deletar dados de usuarios


module.exports = routes;//exporta o arquivo de rotas
