exports.up = knex=> knex.schema.alterTable('users', table =>{//cria uma tabela
    table.timestamp('deleted_at')//informa a data/hora que um usuario foi deletado
  })

  exports.down = knex=> knex.schema.alterTable('users', table =>{
    table.dropColumn('deleted_at')
    })
 