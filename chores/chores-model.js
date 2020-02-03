const db = require("../database/dbConfig")

module.exports = {

addChore,
getChore,
findById,
update

}
//inserting chore into database 
// function addChore(chore) {
//     return db('chore')
//         .insert(chore)
//         .then(ids => {
//             return findById(ids[0])
//         })
        
// }

async function addChore(user) {
    const [id] = await db('chore').insert(user);
  
    return findById(id);
  }

// grab all resources in table
function getChore(){
    return db('chore')
}

function findById(id) {
    return db('chore')
      .where({ id })
      .first()
  }

  function update(changes, id) {
    return db('chore')
      .where('id', Number(id))
      .update(changes);
  }