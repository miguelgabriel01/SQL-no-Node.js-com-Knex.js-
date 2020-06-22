const knex = require('../database');//importa o arquivo de configuração do banco

module.exports = {

 //rota responsavel por listar todos os usuarios cadastrados
 async index( req,res ) {
     const result = await knex('users')

     return res.json(result)//retorna um json com as informações dos usuarios
 }

}