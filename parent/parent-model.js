const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  remove, 
  update
};

function find() {
  return db('parent').select('id', 'username');
}

function findBy(filter) {
  return db('parent').where(filter);
}

async function insert(user) {

  const [id] = await db('parent').insert(user); 
  return findById(id);
}


function findById(id) {
  return db('parent')
    .where({ id })
    .first();
}

function update(changes, id) {
  return db('parent')
    .where('id', Number(id))
    .update(changes);
}

function remove(id) {
  return db("parent")
    .where({ id })
    .del();
}