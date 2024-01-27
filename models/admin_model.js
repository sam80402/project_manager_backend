const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const adminSchema = new Schema({
    id: {type: String},
    email: {type: String, required: true},
    password: {type: String, minLength: 8, maxLength: 32, required: true}
    
});

module.exports = mongoose.model("Admin", adminSchema);