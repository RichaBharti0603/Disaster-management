const mongoose = require("mongoose"); // Import mongoose

const AlertSchema = new mongoose.Schema({
    message: { type: String, required: true },
    location: { type: String, required: true },
    severity: { type: String, enum: ["low", "medium", "high"], required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Alert", AlertSchema);
