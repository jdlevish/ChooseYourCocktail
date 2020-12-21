const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
// route for liquor chosen by user, used to bring back list of cocktails from the cocktail database
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
app.get("/api/cocktailRecipe/:id", function (req, res) {
    var id = req.params.id


    axios({
        "method": "GET",
        "url": `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=` + id,


    })
        .then((api) => {

            console.log(api.data)
            res.send(api.data)
        })

})


app.listen(8080, () => console.log(' listening on port 8080!'));