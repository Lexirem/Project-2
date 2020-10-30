const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  title: {type: String},
  image: {type: String},
  description: {type: String},
  price: {type: String},
  favourites: {type: Boolean}
});

photoSchema.set('timestamps', true);

const PhotoSchema = mongoose.model('photoSchema', photoSchema);

module.exports = PhotoSchema;