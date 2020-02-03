const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('child').insert([
        {id: 1,
          fstname: 'Josh',
          lstname: 'Dimmick',
          username: 'joshd',
          password: bcrypt.hashSync("test1", 12)

          },
        {id: 2, 
          fstname: 'Jules jr',
          lstname: 'Winnfield',
          username: 'boy',
          password: bcrypt.hashSync("test2", 12)

        },
        {id: 3, 
          fstname: 'Vinny',
          lstname: 'Vega',
          username: 'vinnyv',
          password: bcrypt.hashSync("test3", 12)

        }       
      ]);
    });
};



