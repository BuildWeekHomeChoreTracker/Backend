const db = require('../database/dbConfig');

module.exports = {
  insert,
  find,
  findBy,
  findById,
  remove, 
  update,
  getParent,
  getChildById
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

function getChildById(id) {
  return db('child as c')
    .where('c.parent_id', id)
}

function getParent(id) {
  return db('child as c')
    .join('parent as p', 'p.id', 'c.parent_id')
    .select('p.name as parent_name', 'c.id as child_id', 'c.fstname', 
    'c.lstname', 'c.username' )
    .where('c.parent_id', id)
    .orderBy('c.id')
}