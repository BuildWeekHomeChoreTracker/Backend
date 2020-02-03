const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('child').insert([
        {id: 1,
          name: 'Josh',
          username: 'joshd',
          password: '12345',
          parent_id: null,
          chore_id: null
          },
        {id: 2, 
          name: 'Jules jr',
          username: 'boy',
          password: '54321',
          parent_id: null,
          chore_id: null
        },
        {id: 3, 
          name: 'Vinny',
          username: 'vinnyv',
          password: '00000',
          parent_id: null,
          chore_id: null
        }       
      ]);
    });
};



