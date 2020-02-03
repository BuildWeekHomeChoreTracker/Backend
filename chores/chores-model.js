const db = require("../database/dbConfig")

module.exports = {

addChore,
getChore,
findById,
update,
remove

}
//inserting chore into database 

// function addChore(child, chore_id) {
//     return db('chore')
//         .insert(child, chore_id)
//         .then(([id]) => {
//             return db('chore')
//                 .where({ id })
//         })
        
//}

async function addChore(user) {
    const [id] = await db('chore').insert(user);
  
    return addChild(user.chore_id, id);
  }
async function addChild(chore_id, id) {
    return db('child')
    .insert({ chore_id: id })
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
  function remove(id) {
    return db("chore")
      .where({ id })
      .del();
  }