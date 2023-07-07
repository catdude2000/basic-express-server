'use strict';

const express = require('express');
// const cors = require('cors');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const validator = require('./middleware/validator');
const logger = require('./middleware/logger');

const app = express();

// app.use(cors());
app.use(express.json());

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('proof: LIFE!');
});

app.get('/Mike', validator, (req, res, next) => {
  console.log('Name query for person endpoint: ', req.query.name);
  // let name = req.query.name;
  res.status(200).send(req.query.name);
});

app.use('*', notFound);
app.use(errorHandler);

const start = (port) => app.listen (port, () => console.log('listening on port:', port));

module.exports = { start, app };