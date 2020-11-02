const mongoose = require('mongoose');
const Photo = require('../models/photo');

const dbName = 'SM-Photography';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const photos = [
  {
    title: "Man and lion",
    image: src="/public/images/fotos-Database/B&W/b&w_belgium1.jpg",
    description: "Black and white photo taken in Belgium. Man and lion's profile",
    price: "200$",
    favourites: true,
  },
  {
    title: "Cycling with the dog",
    image: src="/public/images/fotos-Database/B&W/b&w_belgium2.jpg",
    description: "Cycling with the dog in the bicicle's basket in Belgium",
    price: "150$",
    favourites: true,
  },
  {
    title: "Memorial to the Murdered Jews of Europe",
    image: src="/public/images/fotos-Database/B&W/b&w_berlin1.jpg",
    description: "Memorial to remind humandkind to learn from past experiences",
    price: "100$",
    favourites: true,
  },
  {
    title: "A wall between two generations",
    image: src="/public/images/fotos-Database/B&W/b&w_berlin1.jpg",
    description: "Never forget the past, but envision a better future.",
    price: "250$",
    favourites: true,
  },
  {
    title: "The past meets the present",
    image: src="/public/images/fotos-Database/B&W/b&w_bratislava1.jpg",
    description: "Living in a world where the past and the future are the present.",
    price: "190$",
    favourites: true,
  }
]


Photo.create(photos, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${photos.length} photos`)
    mongoose.connection.close();
  });