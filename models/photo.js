const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  title: {type: String, required: true},
  image: {type: String, required: true},
  description: {type: String, required: true},
  theme: {type: String, required: true},
  price: {type: Number, required: true},
  favourites: {type: Boolean, required: true}
});

photoSchema.set('timestamps', true);

const Photo = mongoose.model('photo', photoSchema);

module.exports = Photo;