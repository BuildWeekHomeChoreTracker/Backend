const router = require('express').Router();

const Child = require('./child-model');

const authenticate = require('../auth/authenticateMW');

router.get('/', authenticate, (req, res) => {
  Child.find()
    .then(childs => {
      res.json(childs);
    })
    .catch(err => res.send(err));
});
////
router.get('/:id', (req, res) => {
  const { id } = req.params;

  Child.findById(id)
  .then(child => {
    if (child) {
      Child.getChoreById(id) //If child id is found, get chores by id
      .then(chore => {
          let addChore = []
          
            if (chore.length) {
              addChore = chore //If tasks exist, set addTasks
            }
         
            res.json({...child[0], chore: addChore}) //Spread child[selecting id to remove from returned array], then add chore
          })
          
      
      .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Failed at nested chores' });
      });
    } else {
      res.status(404).json({ message: 'Could not get child with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get child' });
  });
});

router.post('/:id/chore', (req, res) => {
  const choreData = req.body;
  const { id } = req.params; 

  Child.findById(id)
  .then(chld => {
    if (chld) {
      Child.addChore(choreData, id)
      .then(chores => {
        res.status(201).json(chores);
      })
    } else {
      res.status(404).json({ message: 'Could not get child with given id.' })
    }
  })
  .catch (err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to create new chore' });
  });
});

module.exports = router;