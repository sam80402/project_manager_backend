const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const caseSchema = new Schema({
    id: {type: String},
    customer: {type: String, required: true},
    phone: {type: String},
    email: {type: String, minLength: 6},
    address: {type: String, required: true},
    building_type: {type: String, enum: ["house", "strata", "commercial"]},
    quotation_progress: {type: String, 
        enum: ["Awaiting On-site Assessment", "Pending Quotation Issuance", "Awaiting Closure", "Closed Deal"], 
        required: true, default: "Awaiting On-site Assessment"},
    description: {type: String},
    price: {type: Number},
    working_progress: {type: String, enum: ["Arrange time", "Doing", "Done"]},
    payment_progress: {type: String, enum: ["Waiting", "Finish"]},
        


});

module.exports = mongoose.model("Case", caseSchema);