const mongoose = require('mongoose');
const Photo = require('../models/photo');

const dbName = 'SM-Photography';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const photos = [
  {
    title: "Man and lion",
    image: src="/images/fotos-Database/B&W/b&w_belgium1.jpg",
    description: "Black and white photo taken in Belgium. Man and lion's profile",
    theme: "Black and white",
    price: "200$",
    favourites: true,
  },
  {
    title: "Cycling with the dog",
    image: src="/images/fotos-Database/B&W/b&w_belgium2.jpg",
    description: "Cycling with the dog in the bicicle's basket in Belgium",
    theme:"Black and white",
    price: "150$",
    favourites: true,
  },
  {
    title: "Memorial to the Murdered Jews of Europe",
    image: src="/images/fotos-Database/B&W/b&w_berlin1.jpg",
    description: "Memorial to remind humandkind to learn from past experiences",
    theme:"Black and white",
    price: "100$",
    favourites: true,
  },
  {
    title: "A wall between two generations",
    image: src="/images/fotos-Database/B&W/b&w_berlin1.jpg",
    description: "Never forget the past, but envision a better future.",
    theme:"Black and white",
    price: "250$",
    favourites: true,
  },
  {
    title: "The past meets the present",
    image: src="/images/fotos-Database/B&W/b&w_bratislava1.jpg",
    description: "Living in a world where the past and the future are the present.",
    theme:"Black and white",
    price: "190$",
    favourites: true,
  }
  {
    title: "Lifetime Path",
    image: src="/images/fotos-Database/B&W/b&w_bratislava2.jpg",
    description: "Life is not made of a straight line.",
    theme:"Black and white",
    price: "290$",
    favourites: true,
  }
  {
    title: "Széchenyi Chain Bridge",
    image: src="/images/fotos-Database/B&W/b&w_budapest1.jpg",
    description: "Bridge Széchenyi Lánchíd in Budapest",
    theme:"Black and white",
    price: "290$",
    favourites: true,
  }
]

Photo.create(photos, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${photos.length} photos`)
    mongoose.connection.close();
  });