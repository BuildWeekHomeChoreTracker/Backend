const router = require('express').Router();

const Parent = require('./users-model');

const authenticate = require('../auth/authenticateMW');

router.get('/', authenticate, (req, res) => {
  Parent.find()
    .then(parents => {
      res.json(parents);
    })
    .catch(err => res.send(err));
});
  
module.exports = router;