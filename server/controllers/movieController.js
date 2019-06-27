// const movieModel = require('../models/movieModel.js');
const { API_KEY } = require('../../config');
const axios = require('axios');
const favorites = require('../../db/sql').connection;
//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    // get the search genre
    // https://www.themoviedb.org/account/signup
    // get your API KEY
    // use this endpoint to search for movies by genres, you will need an API key
    // https://api.themoviedb.org/3/discover/movie
    // and sort them by horrible votes using the search parameters in the API
    //

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_genres=${
          req.params.id
        }`
      )
      .then(movies => {
        res.send(movies.data.results);
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
      .then(results => {
        res.send(results.data.genres);
      })
      .catch(err => {
        res.status(500).send();
      });
  },
  saveMovie: (req, res) => {
    console.log(req.body);
    favorites.query(
      `INSERT INTO favorites (poster_path, title, release_date) VALUES ("${
        req.body.movie.poster_path
      }", "${req.body.movie.title}", "${req.body.movie.release_data}")`,
      function(error, results) {
        if (error) console.error(error);
        else console.log(results);
      }
    );
  },
  deleteMovie: (req, res) => {}
};
