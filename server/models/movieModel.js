//SELECT one db to work with
//For SQL
// const sqlDb = require('../../db/sql');
//For Mongo
const mongoDb = require('../../db/mongodb');
const mongoose = require('mongoose');

var schema = new mongoose.Schema({ id: String, name: String, rating: Number });

module.exports = {};
