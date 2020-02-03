const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
};

function find() {
  return db('child').select('id', 'username');
}
// added for a filter
function findBy(filter) {
  return db('child').where(filter);
}
// adding a child and adding the id to the child_id in familly
async function insert(user) {

  const [id] = await db('child').insert(user);
  return addChildId(user.id, id);
}
function addChildId(id) {
  return  db('family')
  .insert({ child_id: id})
}

function findById(id) {
  return db('child')
    .where({ id })
    .first();
}