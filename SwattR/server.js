const path = require('path');
const express = require('express');
const app = express()
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 8080;
const db = require('./models')
const models = require('./models')


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');

//load passport strategies
// require('./config/passport/passport')(passport, models.user);


//Routes
const apiRoutes = require('./routing/apiRoutes.js')(app);
const htmlRoutes = require('./routing/htmlRoutes.js')(app);
// const authRoute = require('./routing/auth')(app, passport);
// const userRoutes = require('./routing/userRoutes')(app);



db.sequelize.sync({}).then(function () {
  console.log('Database is synced!');
  app.listen(PORT, function () {
    console.log('listening on http://localhost:' + PORT);
  });
});