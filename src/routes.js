//Arquivos de rotas da aplicação
const express = require('express');//importa o express
const routes = express.Router();

const UsersController = require('./controllers/UsersController')//importo o controller de usuarios
const ProjectsController = require('./controllers/ProjectsController')//importo o controller de projetos

//Rotas sobre usuario
routes.get('/users', UsersController.index)//rota responsavel por listar todos os usuarios cadastrados
routes.post('/users', UsersController.create)//rota responsavel por criar usuarios
routes.put('/users/:id', UsersController.update)//rota responsavel por atualizar dados de usuarios
routes.delete('/users/:id', UsersController.delete)//rota responsavel por deletar dados de usuarios

//rotas sobre projeto
routes.get('/projects', ProjectsController.index)//rota responsavel por listar os projetos



module.exports = routes;//exporta o arquivo de rotas
