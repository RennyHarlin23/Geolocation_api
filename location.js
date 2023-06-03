const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    Latitude: Number,
    Longitude: Number,
    Name: String,
    Date: Number

})

module.exports = mongoose.model('location', locationSchema)