const express = require('express');
const logger = require('morgan');
require('dotenv').config({ path: `${__dirname}/../.env` });

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category')

require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category', categoryRouter)

module.exports = app;
