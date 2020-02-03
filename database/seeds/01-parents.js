const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parent').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('parent').insert([
        {id: 1,
          fname: 'Jimmie',
          lname: 'Dimmick',
          email: 'jimmyd@test.com',
          username: 'hideout',
          password: bcrypt.hashSync("gourmetcafe", 12)          
          },
        {id: 2,
          fname: 'Jules',
          lname: 'Winnfield',
          email: 'badmthrfkr@test.com',
          username: 'jules',
          password: bcrypt.hashSync("badmofo", 12)
          },
        {id: 3,
          fname: 'Vincent',
          lname: 'Vega',
          email: 'heroin@test.com',
          username: 'gunman',
          password: bcrypt.hashSync("junkie", 12)
          }
      
      ]);
    });
};
