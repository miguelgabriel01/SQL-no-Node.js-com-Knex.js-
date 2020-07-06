//Controle de projetos
const knex = require('../database');//importa o arquivo de configuração do banco

module.exports = {

 //rota responsavel por listar todos os projetos cadastrados
 //desta maneira, o usuario pode visualizar todos os projetos, mas tmb pode visualizar projetos de usuarios especificos
 async index( req,res,next ){
   try {
       const { user_id ,page = 1} = req.query;//recebo o id do usuario como paramentro
       
       const query = knex('projects')//tabela de projetos
       .limit(5)//limite de 5 projetos por paginação
       .offset(( page -1 ) * 5)//de 5 em 5 projetos
        
        //responsavel por informar quantos projetos estão cadastrados
        const countOBJ = knex('projects').count()

       if(user_id){
           query
           .where({ user_id })//se existir um projeto com o id informado..
           .join('users','users.id','=','projects.user_id')
           .select('projects.*','users.username')//todos os dados sobre o projeto, alem do nome do usuario responsavel por ele

           countOBJ
           .where({ user_id })//mostra apenas o numero de projetos de determinado usuario
       }

        const [count] = await countOBJ
       res.header('X-Total-Count',count["count"])//exibi o numero de projetos cadastrados

       const results = await query

       return res.json(results)//retorna um json com os projetos

   } catch ( error ) {
       next( error )//msg de erro
 }
 
},

//criar projetos
 async create( req,res,next ){
     try {
         const { title,user_id } = req.body//recebemos e guardamos em uma const o titulo do projeto e o id do usuario que esta cadastrando

         //na tabela projects inserimos os dados
         await knex('projects').insert({
             title,
             user_id
         })

         return res.status(201).send()
     } catch ( error ) {
         next( error )
     }
 }

}