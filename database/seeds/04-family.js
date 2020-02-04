exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('family').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('family').insert([
        {id: 1,
          name: 'Dimmick',
          parent_id: 1,

        },
        {id: 2,
          name: 'Winnfield',
          parent_id: 2,

          },
        {id: 3, 
          name: 'Vega',
          parent_id: 3,

        },
        {id: 4, 
          name: 'test',
          parent_id: 4,

        }
      ]);
    });
};

