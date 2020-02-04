const router = require('express').Router();

const Chores = require('./chores-model');

const authenticate = require('../auth/authenticateMW');


router.get('/', authenticate, (req, res) => {
  Chores.getChore()
    .then(chore => {
      res.json(chore);
    })
    .catch(err => res.send(err));
});
//taking a chore and adding a child

// router.post('/', (req, res) => {
//   const choreData = req.body;

//   Chores.insert(choreData)
//   .then(chores => {
//         res.status(201).json(chores);
//     })
    
//   .catch (err => {
//     console.log(err)
//     res.status(500).json({ message: 'Failed to create new chore' });
//   });
// });

// router.post('/register', authenticate, async (req, res) => {
  
//   // const [id] = await db('chore').insert(chores);
//   // return findById(id);

//  let {  name, description, comments, completed, due_date, chore_score, bonus_pts, clean_strk, photo_obj, child_id, parent_id } = req.body

//  try {

//    const saved = await Chores.insert({
//     name, description, comments, completed, due_date, chore_score, bonus_pts, clean_strk, photo_obj, child_id, parent_id
//    })
   
//    res.status(201).json(saved)
//  } catch (err) {
//    res.status(500).json(err.message)
//  }
// }) 
//   const [id] = await db('chore').insert(chores);
//   return findById(id);
//  }


//middle ware to just let parent post
//regular add chore
router.post('/', (req, res) => {
  
  Chores.insert(req.body)
 
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