const router = require('express').Router();

const Chores = require('./chores-model');



router.get('/', (req, res) => {
  Chores.getChore()
    .then(chore => {
      res.json(chore);
    })
    .catch(err => res.send(err));
});

router.post('/', (req, res) => {
  let user = req.body;


  Chores.addChore(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
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
  
module.exports = router;