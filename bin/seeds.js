const mongoose = require('mongoose');
const Photo = require('../models/photo');

const dbName = 'SM-Photography';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const photos = [
  {
    title: "",
    image: "",
    description: "",
    price: "$",
    favourites: true,
  },
  {
    title: "",
    image: "",
    description: "",
    price: "$",
    favourites: true,
  },
  {
    title: "",
    image: "",
    description: "",
    price: "$",
    favourites: true,
  },
  {
    title: "",
    image: "",
    description: "",
    price: "$",
    favourites: true,
  }
]


Photo.create(photos, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${photos.length} photos`)
    mongoose.connection.close();
  });