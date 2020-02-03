const router = require('express').Router();

const Family = require('./family-model');

const authenticate = require('../auth/authenticateMW');

router.get('/', authenticate, (req, res) => {
    Family.find()
      .then(fam => {
        res.json(fam);
      })
      .catch(err => res.send(err.message));
      console.log(err.message)
  });



router.post('/', authenticate, (req, res) => {
    let user = req.body;
  
  
    Family.insert(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
module.exports = router;