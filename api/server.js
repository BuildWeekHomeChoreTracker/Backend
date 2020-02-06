const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser')


const childRouter = require('../child/child-router');
const parentRouter = require('../parent/parent-router');
const authRouter = require('../auth/auth-router');
const choresRouter = require('../chores/chores-router');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// routes

server.use('/api/auth/parent', parentRouter);
server.use('/api/auth/child', childRouter);
server.use('/api/auth/',  authRouter);
server.use('/api/chore', choresRouter);

// body parser for IOS image upload

server.use(bodyParser.urlencoded({ 

  parameterLimit: 20000,
  limit: "20mb",
  extended: true 

}))

server.use(bodyParser.json({
  
 limit: '20mb'

}))

// server check

server.get('/', (req, res) => {
  res.status(200).json({ api: "If you see me, I am here..."});
});

module.exports = server;