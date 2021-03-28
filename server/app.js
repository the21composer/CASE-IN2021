const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require("http");
const cors = require("cors");
const port = process.env.PORT || 4001;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
const server = http.createServer(app);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const db = require("./init_db.js");
let ddb = new db.DBMaster()
console.log(ddb.getUserTasks("Работник"))
module.exports = app;
