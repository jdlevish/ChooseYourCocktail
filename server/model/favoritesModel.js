const mongoose = require('mongoose');


const { Schema } = mongoose;
const UserFavorites = new Schema({
    user_id: String,
    favorite_id: Number
});

mongoose.model('Favorites', UserFavorites);