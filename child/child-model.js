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

async function insert(user) {
  const [id] = await db('child').insert(user);

  return findById(id);
}

function findById(id) {
  return db('child')
    .where({ id })
    .first();
}