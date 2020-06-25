//Controle de projetos
const knex = require('../database');//importa o arquivo de configuração do banco

module.exports = {

 //rota responsavel por listar todos os projetos cadastrados
 //desta maneira, o usuario pode visualizar todos os projetos, mas tmb pode visualizar projetos de usuarios especificos
 async index( req,res,next ){
   try {
       const { user_id } = req.query;//recebo o id do usuario como paramentro
       
       const query = knex('projects')//tabela de projetos

       if(user_id){
           query
           .where({ user_id })//se existir um projeto com o id informado..
           .join('users','users.id','=','projects.user_id')
           .select('projects.*','users.username')//todos os dados sobre o projeto, alem do nome do usuario responsavel por ele
       }

       const results = await query

       return res.json(results)//retorna um json com os projetos

   } catch ( error ) {
       next( error )//msg de erro
 }
}


 /*
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
         .del()
         return res.send()//envia a resposta
     }catch( error ){
         next( error )//se algo errado acontecer, será informado
     }
 }
*/
}