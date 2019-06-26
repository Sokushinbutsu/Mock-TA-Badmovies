const Favorites = require('../models/movieModel.js');
const { API_KEY } = require('../../config.js');
const axios = require('axios');
var express = require('express');
var router = express.Router();

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=true&with_genres=${
          req.params.id
        }`
      )
      .then(movies => {
        res.send(JSON.stringify(movies.data.results));
      })
      .catch(err => {
        res.status(500).send();
      });
  },
  getGenres: (req, res) => {
    // make an axios request to get the list of official genres
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list
    // send back
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  },
  saveMovie: (req, res) => {
    let favorite = new Favorites({
      popularity: req.body.popularity,
      title: req.body.title,
      image: req.body.image,
      release_date: req.body.release_date
    });

    favorite.save(function(err, result) {
      if (err) {
        console.log('FAVORITE SAVE ERROR: ', err);
        res.status(500).send();
      } else {
        console.log('this is the result: ', result);
        res.status(201).send();
      }
    });
  },
  deleteMovie: (req, res) => {}
};
