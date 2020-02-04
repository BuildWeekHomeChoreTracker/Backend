const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  getChoreById,
  getChild
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
  return findById(id);
}

function findById(id) {
  return db('child')
    .where({ id })
    .first();
}

function getChoreById(id) {
  return db('chore as c')
    .where('c.child_id', id)
}

function getChild(id) {
  return db('chore as c')
    .join('child as chd', 'chd.id', 'c.child_id')
    .select('c.name as chore_name', 'c.id as chore_id', 'c.description', 'c.comments', 'c.Completed','c.due_date', 'c.chore_score', 'c.bonus_pts', 'c.clean_strk', 'c.photo_obj',)
    .where('c.chore_id', id)
    .orderBy('c.id');
}