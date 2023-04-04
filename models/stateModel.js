const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("state", stateSchema)