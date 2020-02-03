const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
};

function find() {
  return db('parent').select('id', 'username');
}
// added for a filter
function findBy(filter) {
  return db('parent').where(filter);
}
//adds family when parent sign ups
async function insert(user) {

  const [id] = await db('parent').insert(user); 
  return addFamily(user.lname, id);
}

function addFamily(lname, id) {
  return db('family')
  .insert({ parent_id: id, name: lname })
}



function findById(id) {
  return db('parent')
    .where({ id })
    .first();
}