//SELECT one db to work with
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const favoritesSchema = new Schema({
  popularity: Number,
  title: String,
  image: String,
  release_date: String
});

let Favorites = mongoose.model('Favorites', favoritesSchema);

// module.exports = {};
module.exports = Favorites;
