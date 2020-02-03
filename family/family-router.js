const router = require('express').Router();

const Family = require('./family-model');

const authenticate = require('../auth/authenticateMW');

router.get('/', authenticate, (req, res) => {
  Family.find()
    .then(parents => {
      res.json(parents);
    })
    .catch(err => res.send(err));
});
  
module.exports = router;