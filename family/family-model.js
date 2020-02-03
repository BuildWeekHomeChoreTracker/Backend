const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
};

function find() {
  return db('family');
}
// added for a filter
function findBy(filter) {
  return db('family').where(filter);
}

async function insert(user) {
  const [id] = await db('family').insert(user);

  return findById(id);
}

function findById(id) {
  return db('family')
    .where({ id })
    .first();
}

