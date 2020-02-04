
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('child_chore').del()
    .then(function () {
      // Inserts seed entries
      return knex('child_chore').insert([
        {id: 1,
          family_id: 1, 
          child_id: 1,
          chore_id: 1
        },
        {id: 2,
          family_id: 2, 
          child_id: 2,
          chore_id: 2
        },
        {id: 3,
          family_id: 3, 
          child_id: 3,
          chore_id: 3
        },
        {id: 4,
          family_id: 4, 
          child_id: 4,
          chore_id: 4
        },
      ]);
    });
};
