require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

<<<<<<< HEAD

const favicon = require('serve-favicon');
const mongoose = require('mongoose');


mongoose
  .connect('mongodb://localhost/S.M.Photography', {
=======
const favicon = require('serve-favicon');
const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");

mongoose
  .connect('mongodb://localhost/uber-for-laundry', {
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

<<<<<<< HEAD
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
=======
  //*orden de los routers* authRouter tiene que ir antes de laundryRouter si queremos ver las rutas de laundry correctamente.
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const laundryRouter = require('./routes/laundry');
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware Setup

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use('/', indexRouter);
<<<<<<< HEAD
app.use("/", authRouter);
=======
app.use('/', authRouter);
>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
app.use('/', laundryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

<<<<<<< HEAD
module.exports = app;
=======
module.exports = app;


>>>>>>> b11952c28e8ad56cc6499def92c4954aab1e2e61
