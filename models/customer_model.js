const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const customerSchema = new Schema({
    id: {type: String},
    address: {type: String, required: true},
    
});

module.exports = mongoose.model("Customer", customerSchema);