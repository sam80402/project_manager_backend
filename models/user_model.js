const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    id: {type: String},
    name: {type: String, required: true},
    googleID: {type: String},
    email: {type: String, required: true},
    password: {type: String, minLength: 8, maxLength: 32}
    
});

module.exports = mongoose.model("User", userSchema);