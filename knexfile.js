// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',//informo o tipo de banco
    connection: {
      database:"knex_test",//nome do banco
      user:"postgres",//uduario responsavel pelo banco
      password:"gabriel"//senha
    },
    migrations:{
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`//informo onde quero que os arquivos de migrations sejam instalados
    },
    seeds:{
      directory: `${__dirname}/src/database/seeds`//informo onde os arquivos de seed sejam instalados
    }
  }
}
