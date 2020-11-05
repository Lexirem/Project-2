require('dotenv').config();
const mongoose = require('mongoose');
/* const session = require('session'); */
const Photo = require('../models/photo');


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true } );



Photo.collection.drop();


const photos = [
  {
    title: "Man and lion",
    image: src="/images/fotos-Database/B&W/b&w_belgium1.jpg",
    description: "Black and white photo taken in Belgium. Man and lion's profile",
    theme: "Black and white",
    price: 200,
    favourites: true,
  },
  {
    title: "Cycling with the dog",
    image: src="/images/fotos-Database/B&W/b&w_belgium2.jpg",
    description: "Cycling with the dog in the bicicle's basket in Belgium",
    theme:"Black and white",
    price: 150,
    favourites: true,
  },
  {
    title: "Memorial to the Murdered Jews of Europe",
    image: src="/images/fotos-Database/B&W/b&w_berlin1.jpg",
    description: "Memorial to remind humandkind to learn from past experiences",
    theme:"Black and white",
    price: 100,
    favourites: true,
  },
  {
    title: "A wall between two generations",
    image: src="/images/fotos-Database/B&W/b&w_berlin2.jpg",
    description: "Never forget the past, but envision a better future.",
    theme:"Black and white",
    price: 250,
    favourites: true,
  },
  {
    title: "The past meets the present",
    image: src="/images/fotos-Database/B&W/b&w_bratislava1.jpg",
    description: "Living in a world where the past and the future are the present.",
    theme:"Black and white",
    price: 190,
    favourites: true,
  },
  {
    title: "Lifetime Path",
    image: src="/images/fotos-Database/B&W/b&w_bratislava2.jpg",
    description: "Life is not made of a straight line.",
    theme:"Black and white",
    price: 290,
    favourites: true,
  },
  {
    title: "Széchenyi Chain Bridge",
    image: src="/images/fotos-Database/B&W/b&w_budapest1.jpg",
    description: "Bridge Széchenyi Lánchíd in Budapest",
    theme:"Black and white",
    price: 290,
    favourites: true,
  },

  /* THEME Urban */
  {
    title: "Canal and boats",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_amsterdam2.jpg",
    description: "One of many canals in Amsterdam",
    theme:"Urban",
    price: 100,
    favourites: true,
  },
  {
    title: "Climbers",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_amsterdam1.jpg",
    description: "Climb but do not jump",
    theme:"Urban",
    price: 120,
    favourites: true,
  },
  {
    title: "Focus on the windows",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_amsterdam3.jpg",
    description: "Same building different flags",
    theme:"Urban",
    price: 110,
    favourites: true,
  },
  {
    title: "Get lost in the street",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_amsterdam4.jpg",
    description: "Nothing better to get to know a city but to walk on it's streets",
    theme:"Urban",
    price: 150,
    favourites: true,
  },
  {
    title: "Antwerp City Hall building",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_brussels1.jpg",
    description: "Antwerp City Hall building with flags for many nations of the world iluminated",
    theme:"Urban",
    price: 100,
    favourites: true,
  },
  {
    title: "Antwerp City Hall building",
    image: src="/images/fotos-Database/City-Buildings-Monuments/cbm_brussels2.jpg",
    description: "Antwerp City Hall building with flags for many nations of the world",
    theme:"Urban",
    price: 100,
    favourites: true,
  },
/*   THEME Landscape */
  {
    title: "High Line",
    image: src="/images/fotos-Database/Landscape/lands_belfast1.jpg",
    description: "Slacklining in Belfast",
    theme:"Landscape",
    price: 100,
    favourites: true,
  },
  {
    title: "Brasilia's Sunset",
    image: src="/images/fotos-Database/Landscape/lands_brasilia1.jpg",
    description: "The best in Brasilia is it's sunset",
    theme:"Landscape",
    price: 200,
    favourites: true,
  },
  {
    title: "Playing at the beach",
    image: src="/images/fotos-Database/Landscape/lands_bray1.jpg",
    description: "Sunset at the beach in Bray",
    theme:"Landscape",
    price: 250,
    favourites: true,
  },
  {
    title: "Cinque Terre",
    image: src="/images/fotos-Database/Landscape/lands_cinqueterre1.jpg",
    description: "Views of Cinque Terre",
    theme:"Landscape",
    price: 100,
    favourites: true,
  },
  {
    title: "Plitvice Lakes National Park",
    image: src="/images/fotos-Database/Landscape/lands_croatia1.jpg",
    description: "Waterfalls Plitvice Lakes National Park",
    theme:"Landscape",
    price: 200,
    favourites: true,
  },
  {
    title: "Winter in Denmark",
    image: src="/images/fotos-Database/Landscape/lands_denmark1.jpg",
    description: "Pathway at winter time in Denmark",
    theme:"Landscape",
    price: 200,
    favourites: true,
  },
  {
    title: "Fishing boat",
    image: src="/images/fotos-Database/Landscape/lands_denmark2.jpg",
    description: "Returning to the harbour in Denmark",
    theme:"Landscape",
    price: 200,
    favourites: true,
  },
  {
    title: "City Park in Copenhagen",
    image: src="/images/fotos-Database/Landscape/lands_denmark3.jpg",
    description: "Lost in the foggy woods",
    theme:"Landscape",
    price: 200,
    favourites: true,
  },
  /* THEME Street Life*/  {
    title: "Orange Kombi",
    image: src="/images/fotos-Database/UrbanStreetLife/street_amsterdam1.jpg",
    description: "Chilling by the canal",
    theme:"Street-Life",
    price: 250,
    favourites: true,
  },
  {
    title: "Going through the canal",
    image: src="/images/fotos-Database/UrbanStreetLife/street_amsterdam2.jpg",
    description: "Quiet afternoon with friends",
    theme:"Street-Life",
    price: 200,
    favourites: true,
  },
  {
    title: "Bikes",
    image: src="/images/fotos-Database/UrbanStreetLife/street_amsterdam3.jpg",
    description: "Find yours",
    theme:"Street-Life",
    price: 200,
    favourites: true,
  },
  {
    title: "Pretty Canal",
    image: src="/images/fotos-Database/UrbanStreetLife/street_amsterdam4.jpg",
    description: "Find your favorite boat/car/house",
    theme:"Street-Life",
    price: 200,
    favourites: true,
  },
  {
    title: "Matching with your tinder date",
    image: src="/images/fotos-Database/UrbanStreetLife/street_amsterdam5.jpg",
    description: "Mind your way",
    theme:"Street-Life",
    price: 200,
    favourites: true,
  },
  /* THEME Macro */
  {
    title: "Where's the bee",
    image: src="/images/fotos-Database/macro/macro_flower1.jpg",
    description: "Bee on the Sunflower",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
  {
    title: "Tulips",
    image: src="/images/fotos-Database/macro/macro_flower4.jpg",
    description: "Colors of spring",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
  {
    title: "Mushrooms",
    image: src="/images/fotos-Database/macro/macro_mushroom1.jpg",
    description: "Time for mushy",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
  {
    title: "Cabbage",
    image: src="/images/fotos-Database/macro/macro_veggie1.jpg",
    description: "Cabbage time",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
  {
    title: "Colorful Veggies",
    image: src="/images/fotos-Database/macro/macro_veggie2.jpg",
    description: "Beetroot",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
  {
    title: "Tomates",
    image: src="/images/fotos-Database/macro/macro_veggie4.jpg",
    description: "Tomatoes",
    theme:"Macro",
    price: 200,
    favourites: true,
  },
]

Photo.create(photos, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${photos.length} photos`)
    mongoose.connection.close();
  });