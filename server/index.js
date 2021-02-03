const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');



var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-4xzrdhpo.us.auth0.com/.well-known/jwks.json'
    }),
    audience: 'https://express.sample',
    issuer: 'https://dev-4xzrdhpo.us.auth0.com/',
    algorithms: ['RS256']
});



// route to search cocktaildb by ingredient or liquor type
app.get("/api/cocktailAPI/:liqour", function (req, res) {
    var liquor = req.params.liqour


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=` + liquor,


    })
        .then((api) => {

            console.log(api.data.drinks)
            res.send(api.data.drinks)
        })

})

// route to search cocktaildb by cocktail name
app.get("/api/cocktailAPI/Cocktail/:id", function (req, res) {
    var id = req.params.id


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + id,


    })
        .then((api) => {

            console.log(api.data.drinks)
            res.send(api.data.drinks)
        })

})

// route for all cocktails 
app.get("/api/cocktailAPI/AllCocktails/", function (req, res) {
    // var id = req.params.id


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`


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
        "url": `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + id,


    })
        .then((api) => {

            console.log(api.data)
            res.send(api.data.drinks[0])
        })

})

app.listen(8080, () => console.log(' listening on port 8080!'));