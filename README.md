<img src="/public/images/logo SM-Photography.png">
# S.M Photograpy

## Description
Our APP is an e-commerce application aimed at people passionate about photography.
S.M Photography was developed using Back-end dev(Node.js) as part of the [Ironhack](https://www.ironhack.com/) developer bootcamp (WebDev-FT-0920) using a local Data Base.
## User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **themes and one theme** - As a user I want to see all the themes available so that I can choose from which one I want to see all the pictures available for that theme.
- **one photo** - As a user I want to see the all the information about that 
- **user profile** - As a user I want to see my Orders, returns and favourites pictures and be able to modify my account
- **cart** - As a user I want to be able to see the photos I am about to buy, modify the buying list and go to the payment page so I can confirm my purchase

## Backlog    
- Partnership with a lab printer.
- Be able to buy the photos you selected.
- Mark as Favourites the photos you like the most and save them in your User profile.
## Wireframes   
<img src=“public/images/wireframe.jpg”>
## ROUTES:
- GET / 
 - renders the homepage
- GET /auth/signup
 - redirects to /login so the user can log in
 - renders the signup form (with flash msg)
- POST /auth/signup
 - redirects to /login so the user can log in
 - body:
  - name
  - email
  - password
- GET /auth/login
 - redirects to / if user logged in
 - renders the login form (with flash msg)
- POST /auth/login
 - redirects to / if user logged in
 - body:
  - email
  - password
- POST /auth/logout
  - body: (empty)

- GET /themes
  - renders the themes list + gives two random photos for each theme
- GET /oneTheme/nameOfTheTheme
  - renders the list of photos of that theme
- GET /onePhoto/:id
  - renders the information of the photo you selected

- GET /user 
  - renders to the user profile
- GET /userAccount
  - renders to the user information in case they need to modify any parameter or include an address
- POST /userAccount
  - redirects to /userAccount so the user can check the information they modified
  - body:
    - name
    - email
    - address

- GET /cart
  - renders to the cart page 
- POST /add-to-cart/:id
  - redirects to /cart
  - get the photo ID so it recognise which one you want to buy 
- POST /delete/:id
  - redirects to /cart
  - deletes the photo by their ID from the cart list

- GET /payments
  - renders to payment page so you can purchase the photos you want
- POST /payments
  - redirects to /message when you succeed in your purchase
  - you need to introduce your personal information where you want your purchase to be send to and your payment method  



## Models
User model
```
username: String
email: String
password: String
address: String
cart: [ObjectId<Photo>]
```

Photo model

```
title: String
image: String
description: String
theme: String
price: Number
favorite: Boolean
```
## Links
### Trello (list of tasks)
[Link url](https://trello.com/b/QUSSw8w0/projecte-n2-ironhack)
### Github
URls for the project repo and deploy
[Link Repo](https://github.com/Lexirem/Project-2)
[Link Deploy](https://git.heroku.com/sm-photograpy.git)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1NgPJ4H9Rm7cU69o5gxnY8g5n3M_fCEKa1LAlYhyVp6U/edit?usp=sharing)