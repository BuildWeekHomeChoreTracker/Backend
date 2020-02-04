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




module.exports = router;
