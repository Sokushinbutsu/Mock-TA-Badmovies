const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sign up and get your moviedb API key here:
// https://www.themoviedb.org/account/signup

//Middleware
app.use(bodyParser.json());
// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

//Routes

const movieRoutes = require('./routes/movieRoutes.js');

//Use routes
app.use('/movies', movieRoutes);

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
