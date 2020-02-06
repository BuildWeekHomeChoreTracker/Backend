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
server.use(bodyParser.json())
// routes

server.use('/api/auth/parent', parentRouter);
server.use('/api/auth/child', childRouter);
server.use('/api/auth/',  authRouter);
server.use('/api/chore', choresRouter);
server.use(bodyParser.urlencoded({ extended: false }))

server.use(bodyParser.urlencoded({
  parameterLimit: 125000,
  limit: '50mb',
  extended: true
}))

// server check

server.get('/', (req, res) => {
  res.status(200).json({ api: "If you see me, I am here..."});
});

module.exports = server;