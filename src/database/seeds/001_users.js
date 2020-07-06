
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()//informo a tabela no qual os dados vão ser inseridos
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Miguel gabriel'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'Miguel israel'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'Ryan hudson'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'Luis andre'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'João gabriel'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'gabriel santos'},//dadosque vão ser inseridos na tabela 'users' e no campo 'username'
        {username: 'miguel miguel'}//dadosque vão ser inseridos na tabela 'users' e no campo 'username'

      ]);
    });
};

//importante verificar se a tabela e o campo realmente eistem. caso contrario, o comando npx knex seed:run não funcionara