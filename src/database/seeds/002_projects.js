
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {

      // Inserts seed entries
      return knex('projects').insert([

        {
          user_id: 1,//id do usuario
          title: "Meu projeto teste"//titulo do projeto 
        },

        {
          user_id: 2,//id do usuario
          title: "Meu segundo projeto teste"//titulo do projeto 
        }

      ]);
    });
};
