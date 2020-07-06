
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {

      // Inserts seed entries
      return knex('projects').insert([

        {
          user_id: 6,//id do usuario
          title: "Meu projeto teste"//titulo do projeto 
        },

        {
          user_id: 7,//id do usuario
          title: "Meu segundo projeto teste"//titulo do projeto 
        }

      ]);
    });
};
