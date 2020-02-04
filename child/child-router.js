const router = require("express").Router();

const Child = require("./child-model");

const authenticate = require("../auth/authenticateMW");

router.get("/", authenticate, (req, res) => {
  Child.find()
    .then(childs => {
      res.json(childs);
    })
    .catch(err => res.send(err));
});
// get child by id and chores by child_id



router.get('/:id', (req, res) => {
  const { id } = req.params;

  Child.findById(id)
  .then(child => {
    if (child) {
      Child.getChoreById(id) // if child is found then get chore by id
        .then(chore => {
          let addChore = []
          if(chore.length) {
            addChore = chore // if chore exists add it to array
          }
          res.json({ ...child[0], chore: addChore })
        })
        .catch(err => {
          res.status(500).json({ message: 'Failed at nested chore' });
        });
    } else {
      res.status(404).json({ message: 'Could not get chore for child' })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to get chore' });
  });
});


module.exports = router;
