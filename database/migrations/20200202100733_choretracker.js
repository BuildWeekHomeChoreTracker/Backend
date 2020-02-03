
exports.up = function(knex) {
    return knex.schema
    
    .createTable('parent', tbl => {
        tbl.increments()

    tbl.string('fname', 128)
        .notNullable()

    tbl.string('lname', 128)
        .notNullable()

    tbl.string('email', 128)
        .notNullable()
        .unique()

    tbl.string('username', 128)
        .notNullable()
        .unique()

    tbl.string('password', 128)
        .notNullable()

    })
    .createTable('family', tbl => {
        tbl.increments();

        tbl.string('name')
            .notNullable();

        tbl.integer('parent_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('parent')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        
        tbl.integer('child_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('child')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })

    .createTable('child', tbl => {

        tbl.increments()

        tbl.string('name')
            .notNullable()
           

        tbl.string('username', 128)
            .notNullable()
            .unique()

        tbl.string('password', 128)
            .notNullable()
        
        tbl.integer('parent_id')
            .unsigned()
            
            .references('id')
            .inTable('parent')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        
        tbl.integer('chore_id')
            .unsigned()
            .references('id')
            .inTable('chore')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
    })

    .createTable('chore', tbl => {

        tbl.increments()

        tbl.string('name', 128)
            .notNullable()
            

        tbl.string('description', 500)
            .notNullable()

        tbl.string('comments', 255)

        tbl.boolean('Completed').defaultTo(false)

        tbl.date('due_date')
            

        tbl.integer('chore_score')
            .notNullable()

        tbl.integer('bonus_pts')

        tbl.integer('clean_strk')

        tbl.string('photo_obj')

        tbl.integer('family_id')
            .unsigned()
            
            .references('id')
            .inTable('family')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

    })

    
  
};

exports.down = function(knex) {
  return knex.schema
          .dropTableIfExists('chore')
          .dropTableIfExists('child')
          .dropTableIfExists('family')
          .dropTableIfExists('parent')
};
