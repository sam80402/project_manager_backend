const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const customerSchema = new Schema({
    id: {type: String},
    name: {type: String, required: true},
    phone: {type: [String], required: true},
    email: {type: [String], minLength: 8},
    cases: {type: [mongoose.Schema.Types.ObjectId], ref: "Case"}
    
});

module.exports = mongoose.model("Customer", customerSchema);