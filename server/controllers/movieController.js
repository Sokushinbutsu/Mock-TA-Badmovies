const Favorites = require('../models/movieModel.js');
const { API_KEY } = require('../../config.js');
const axios = require('axios');
var express = require('express');
var router = express.Router();

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
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
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
      )
      .then(response => {
        res.send(response.data);
      })
      .catch(err => {
        res.status(500).send();
      });
  },
  saveMovie: (req, res) => {
    let favorite = new Favorites({
      popularity: req.body.popularity,
      title: req.body.title,
      poster_path: req.body.poster_path,
      release_date: req.body.release_date
    });

    favorite.save(function(err, result) {
      if (err) {
        console.log('FAVORITE SAVE ERROR: ', err);
        res.status(500).send();
      } else {
        res.status(201).send();
      }
    });
  },
  deleteMovie: (req, res) => {
    Favorites.deleteOne({ title: req.body.title }, function(err) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(204).send();
      }
    });
  }
};
