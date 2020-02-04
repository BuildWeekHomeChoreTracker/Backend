const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../config/secrets')
//const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization

    if (token) {
      
      jwt.verify(token, jwtSecret, (err, decodedToken) => {

        if(err) {
// the token is not valid
          res.status(401).json({
            error: "your wheels are spinning."
          })

        } else {
         
          req.user =  decodedToken.user;
          console.log(req.user)

          next()
        }
      })

    } else {
      res.status(400).json({
        message: "Log in error, try again"
      })
    }
  }