const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("city", citySchema)