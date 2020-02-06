const router = require('express').Router();

const Chores = require('./chores-model');

const authenticate = require('../auth/authenticateMW');

const multipart = require('connect-multiparty')

const multipartMW = multipart()

const cloudinary = require('cloudinary')

const fileupload = require('express-fileupload')

router.use(fileupload({
  useTempFiles: true
}))




cloudinary.config({
  cloud_name: 'mikezs',
  api_key: '698823118239967',
  api_secret: 'HmzAmqm5PU1u34rMsmqV7FJ7RaI'
})

// get all chores in database

router.get('/', authenticate, (req, res) => {
  Chores.get()
    .then(chore => {
      res.json(chore);
    })
    .catch(err => res.send(err));
});

// add a post to the database

router.post('/', authenticate, (req, res) => {
  
  Chores.insert(req.body)
 
    .then(saved => { 
         
      res.status(201).json(saved);

    })
    .catch(error => {
      res.status(500).json(error);
      console.log(error)
    });
});

// edit chores by id

router.put('/:id', multipartMW, authenticate, (req, res) => {
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
// image upload 
router.post('/upload', function(res, req) {
  
  const file = req.files
  console.log(file)
  // cloudinary.uploader.upload(file.tempFilePath, function(err, result) {
  //    res.send({
  //     success: true,
  //     message: 'file uploaded!'
  //   })   
  // })

  // file.mv('./uploads/' + file.name, function(err, result) {
  //   if(err)
  //     throw err
  //   res.send({
  //     success: true,
  //     message: 'file uploaded!'
  //   })
  // })
}) 

// router.put('/:id', authenticate, (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Chores.findById(id)
//   .then(chore => {
//     if (chore) {
//       Chores.update(changes, id)
//       .then(updatedChore => {
//         res.json(updatedChore);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find chore with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update chore' });
//   });
// });

// delete a chore by id

router.delete('/:id', authenticate, (req, res) => {
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