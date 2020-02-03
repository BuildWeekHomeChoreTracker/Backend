exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('chore').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('chore').insert([
        {id: 1,
          name: 'wash dishes',
          description: 'clean all dishes in sink.',
          comments: null,
          completed: false,
          due_date: null,
          chore_score: 5,
          bonus_pts: null,
          clean_strk: null,
          photo_obj: null
        
        },
        {id: 2, 
          name: 'wash clothes',
          description: 'wash all clothes in laundry room.',
          comments: null,
          completed: false,
          due_date: null,
          chore_score: 5,
          bonus_pts: null,
          clean_strk: null,
          photo_obj: null
         
        },
        {id: 3, 
          name: 'clean room',
          description: 'pick up you room',
          comments: null,
          completed: false,
          due_date: null,
          chore_score: 5,
          bonus_pts: null,
          clean_strk: null,
          photo_obj: null
         
        }
      ]);
    });
};


