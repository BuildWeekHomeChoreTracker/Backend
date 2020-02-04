const router = require('express').Router();

const Parent = require('./parent-model');

const authenticate = require('../auth/authenticateMW');

router.get('/', authenticate, (req, res) => {
  Parent.find()
    .then(parents => {
      res.json(parents);
    })
    .catch(err => res.send(err));
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Parent.findById(id)
  .then(parent => {
    if (parent) {
      Parent.update(changes, id)
      .then(updatedParent => {
        res.json(updatedParent);
      });
    } else {
      res.status(404).json({ message: 'Could not find parent with given id' });
    }
  })
  .catch (err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to update parent' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  Chores.remove(id)
  .then(deleted => {
      console.log(deleted)
      if (deleted) {
          res.status(200).json(deleted);
    } else {
      res.status(404).json({ message: 'This parent does not exist' })
    }
  })
  .catch (err => {
      console.log(err)
      res.status(500).json({message: 'Failed to delete parent from database'})
  })
})
  
module.exports = router;