const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const caseSchema = new Schema({
    id: {type: String},
    customer: {type: mongoose.Schema.Types.ObjectId, ref: "Customer"},
    address: {type: String, required: true},
    building_type: {type: String, enum: ["single", "double", "warehouse", "strata", "commercial"], required: true},
    quotation_progress: {type: String, 
        enum: ["Receive Quote Request", "Assessment", "Send Quote", "Client Approval",
         "Plan Execution Timeline", "Execute Case", "Case Completion",
          "Send Invoice", "Get Payment"], 
        required: true, default: "Receive Quote Request"},
    description: {type: String, required: true, default: ""},
    price: {type: Number},
    date: {type: Date, required: true},


});

module.exports = mongoose.model("Case", caseSchema);