const router = require('express').Router();

const Chores = require('./chores-model');

const authenticate = require('../auth/authenticateMW')


router.get('/',  (req, res) => {
  Chores.getChore()
    .then(chore => {
      res.json(chore);
    })
    .catch(err => res.send(err));
});

router.post('/',  (req, res) => {
  let chores = req.body;
  Chores.addChore(chores)
    .then(saved => {
      
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error)
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Chores.findById(id)
  .then(chore => {
    if (chore) {
      Chores.update(changes, id)
      .then(updatedChore => {
        res.json(updatedChore);
      });
    } else {
      res.status(404).json({ message: 'Could not find chore with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update chore' });
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
      res.status(404).json({ message: 'This person does not exist' })
    }
  })
  .catch (err => {
      console.log(err)
      res.status(500).json({message: 'Failed to delete person from database'})
  })
})
  
module.exports = router;