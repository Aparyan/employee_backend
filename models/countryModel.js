const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    country:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("country", countrySchema);