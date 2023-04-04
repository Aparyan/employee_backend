const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    company:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("department", departmentSchema)