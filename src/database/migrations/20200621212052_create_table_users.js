const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex=> knex.schema.createTable('users', table =>{//cria uma tabela
    table.increments('id')//o primeiro registro se inicia com o valor de 1. os proximos vão iniciar com um incremento(1,2,3,4,5..)
    table.text('username').unique().notNullable()//o valor não pode ser nulo para este campo e não pode ter outro usuario com este mesmo nome

    table.timestamp('created_at').defaultTo(knex.fn.now())//informa a hora/data que da criação
    table.timestamp('updated_at').defaultTo(knex.fn.now())//informa a hora/data da atualização dos dados
  }).then(() => knex.raw(onUpdateTrigger('users')));

//se uma tabela com esse nome já estiver criada no banco de dados informado. esta função vai apagar os registros da tabela e reescrever os dados
exports.down = async knex => knex.schema.dropTable('users')

 