//Controle de usuarios
const knex = require('../database');//importa o arquivo de configuração do banco

module.exports = {

 //rota responsavel por listar todos os usuarios cadastrados
 async index( req,res ) {
     const result = await knex('users')
     //listar apenas os usuarios que não possuem o campo de delete
     .where('deleted_at', null)
     
     return res.json(result)//retorna um json com as informações dos usuarios
 },
 
 //rota que cadastra um novo usuario
 async create( req,res,next ) {
     try{
         const { username } = req.body//recebe do corṕo da aplicação o dado
           await knex('users').insert( {username} )//insere no banco os dados salvos na constante que são recebidos pelo BODY

          return res.status(201).send()//status de criado
        }catch( error){
         next(error);//caso algum erro, informa na apliacação
        }
    },

 //rota que atualiza usuario cadastrados
 async update( req,res,next ){
     try {
         const { username } = req.body//salva em uma constante os dados recebidos dpo corpo da requisição
         const { id } = req.params//recebe o id do usuario como parametro

         await knex('users')
         .update({ username })
         .where({ id })
         //atualiza o nome do usuario no qual o id foi informado pelo header( cabeçalho )

         return res.send()//retornamos o resultado

     } catch( error ) {
         next( error )//caso exista um erro no processo de atualiação, uma msg será informada
     }
 },

 //rota para apagar dados de um usuario
 async delete( req,res,next ){
     try{
         const { id } = req.params//recebe o id de um usuario como parametro

         await knex('users')//na tabela usuarios ele apaga o registro com o ID informado
         .where({ id })
         //não vamos mais deletar. vamos informar que o usuario esta nulo
         .update('deleted_at', new Date())//atualizamos a informação no BD

         //.del()
         return res.send()//envia a resposta
     }catch( error ){
         next( error )//se algo errado acontecer, será informado
     }
 }

}