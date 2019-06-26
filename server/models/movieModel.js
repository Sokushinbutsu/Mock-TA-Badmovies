const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  popularity: Number,
  title: String,
  image: String,
  release_date: String
});

let Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
