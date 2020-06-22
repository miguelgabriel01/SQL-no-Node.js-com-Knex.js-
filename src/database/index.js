//Arquivo responsavel por configurar o banco de dados
const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile['development']);

module.exports = knex//exportamos essa configuração para qualquer outro arquivo
