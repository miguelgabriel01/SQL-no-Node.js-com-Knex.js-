const { onUpdateTrigger } = require('../../../knexfile')

exports.up = async knex=> knex.schema.createTable('projects', table =>{//cria uma tabela
    table.increments('id')//o primeiro registro se inicia com o valor de 1. os proximos vão iniciar com um incremento(1,2,3,4,5..)
    table.text('title')//Titulo do projeto que pode ser ou não inserido

    //relacionamento
    table.integer('user_id')//id do usuario
    .references('users.id')//que faz referencia ao campo que contem o id do usuario
    .notNullable()//esse dado não pode ser nulo
    .onDelete('CASCADE')//se um usuario é excluido, todos os projetos que ele cadastrou tambem seram apagados dos registros

    table.timestamps( true, true )//outra forma de salvar a data e a hora em que um dado foi inserido em um banco de dados
}).then(() => knex.raw(onUpdateTrigger('projects')));

//se uma tabela com esse nome já estiver criada no banco de dados informado. esta função vai apagar os registros da tabela e reescrever os dados
exports.down = async knex => knex.schema.dropTable('projects')

 