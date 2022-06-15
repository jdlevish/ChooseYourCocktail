const express = require('express');
const axios = require('axios');
// const path = require('path');
const app = express();
const mongoose = require('mongoose');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const { checkJwt } = require('./auth/check-Jwt');
const { readSync } = require('fs');
require('dotenv').config()

const path = __dirname + '/views/';
app.use(express.static(path));
mongoose.promise = global.Promise;


// mongoose model
require('./model/favoritesModel')
const Favorite = mongoose.model('Favorites');

// mongo connection 
mongoose.connect(process.env.MONGODB_URI);
mongoose.set('debug', true);



// protected routes
// add favorite
app.post("/api/favorites/:id", checkJwt, (req, res) => {
    const cocktailId = req.params.id;
    const user = req.user.sub
    Favorite.exists({ user_id: user }, (err, result) => {
        if (err) {
            console.log(err)
        }
        if (!result) {
            var newFavorite = new Favorite({
                user_id: user,
                favorite_id: cocktailId
            });
            console.log(newFavorite)
            newFavorite.save(function (err, doc) {
                if (err) return console.error(err);
                console.log("Document inserted succussfully!");
            });
        }
        Favorite.find({
            user_id: user
        }).then((data) => {
            // checks if cocktail is already in favorites array
            if (data[0].favorite_id.indexOf(cocktailId) != -1) {
                let id = data[0]._id
                Favorite.findOneAndUpdate(
                    { _id: id },
                    {
                        $pull: {
                            favorite_id: cocktailId
                        }
                    }, function (error, success) {

                        if (error) {

                            console.log(error);

                        } else {

                            console.log(success);

                        }

                    });
            }
            else {


                console.log("favorite array :" + data[0].favorite_id.indexOf(cocktailId));
                let id = data[0]._id
                Favorite.findOneAndUpdate(
                    { _id: id },
                    {
                        $push: {
                            favorite_id: cocktailId
                        }
                    }, function (error, success) {

                        if (error) {

                            console.log(error);

                        } else {

                            console.log(success);

                        }

                    });

            }
        }
        )




    })





        +

        res.status(204).end();



})
// retrieve logged in users favorite cocktails 
app.get("/api/favorites/", checkJwt, (req, res) => {
    const user = req.user.sub
    Favorite.find({
        user_id: user
    }).then((data) => {
        console.log(data);
        res.json(data);
    })



})

// route to search cocktaildb by ingredient or liquor type
app.get("/api/cocktailAPI/:liqour", function (req, res) {
    var liquor = req.params.liqour


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v2/` + DRINK_DB + `/filter.php?i=` + liquor,


    })
        .then((api) => {

            console.log(api.data.drinks)
            res.send(api.data.drinks)
        })

})

// route to search cocktaildb by cocktail name
app.get("/api/cocktailAPI/Cocktail/:id", function (req, res) {
    var id = req.params.id

    console.log(req)
    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v2/` + DRINK_DB + `/search.php?s=` + id,


    })
        .then((api) => {

            console.log(api.data.drinks)
            res.send(api.data.drinks)
        })

})

// route for all cocktails 
app.get("AllCocktails", function (req, res) {

    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v2/` + DRINK_DB + `/filter.php?c=Cocktail`,


    })
        .then((api) => {

            console.log(api)
            res.send(api.data.drinks)
        })

})



// route to call cocktaildb for full recipe once selected by user
app.get("/api/cocktailAPI/recipe/:id", function (req, res) {
    var id = req.params.id


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v2/` + DRINK_DB + `/lookup.php?i=` + id,


    })
        .then((api) => {

            console.log(api.data)
            res.send(api.data.drinks[0])
        })

})

app.get('/', (req, res) => {
    res.sendFile(path + 'index.html');
})
app.get('/*', (req, res) => {
    res.sendFile(path + 'index.html');
})

app.listen(8080, () => console.log(' listening on port 8080!'));