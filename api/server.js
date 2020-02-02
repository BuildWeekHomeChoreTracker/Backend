const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const childRouter = require('../child/child-router');
const parentRouter = require('../parent/parent-router');
const authRouter = require('../auth/auth-router');
const choresRouter = require('../chores/chores-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use('/api/auth/parent', parentRouter);
server.use('/api/auth/child', childRouter);
server.use('/api/auth/', authenticateMW, authRouter);
server.use('/api/chores', choresRouter);

server.get('/', (req, res) => {
  res.send("If you see me, I am here...");
});

module.exports = server;