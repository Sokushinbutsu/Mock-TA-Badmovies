const mongoDb = require('../../db/mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  popularity: Number,
  title: String,
  poster_path: String,
  release_date: String
});

let Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
