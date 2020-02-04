const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  getChoreById,
  getChild,
  get,
  update,
  remove
};
// returns all child details
async function get() {
  return await db('child as c')
    .select("c.fstname", "c.lstname", "c.username")
}

function find() {
  return db('child').select('id', 'username');
}
// added for a filter
function findBy(filter) {
  return db('child').where(filter);
}

// adding a child
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
  return db('chore as chr')
    .join('child as chd', 'chd.id', 'chr.child_id')
    .select('chd.name as child_name', 'chr.id as chore_id', 'chr.description', 
    'chr.comments', 'chr.Completed','chr.due_date', 'chr.chore_score', 'chr.bonus_pts', 
    'chr.clean_strk', 'chr.photo_obj', 'child_id', 'parent_id')
    .where('chr.child_id', id)
    .orderBy('chr.id');
}

function update(changes, id) {
  return db('child')
    .where('id', Number(id))
    .update(changes);
}

function remove(id) {
  return db("child")
    .where({ id })
    .del();
}