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

async function insert(user) {
  const [id] = await db('parent').insert(user);

  return findById(id);
}

function findById(id) {
  return db('parent')
    .where({ id })
    .first();
}