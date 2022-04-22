// load .env
require("dotenv").config();
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const cors = require('cors')

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Express Configuration
App.use(cors());
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));

//Seperated Routes 
const usersRoutes = require("./routes/users");
const exerciseRoutes = require("./routes/exercise");
const workoutsRoutes = require("./routes/workouts");
const { application } = require('express');

//mount resource routes 
App.use('/api/users',usersRoutes(db));
App.use('/api/exercise',exerciseRoutes(db));
App.use('/api/workouts',workoutsRoutes(db));
// Sample GET route
App.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
