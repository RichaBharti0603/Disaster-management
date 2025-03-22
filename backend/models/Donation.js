const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
    donorName: { type: String, required: true },
    amount: { type: Number, required: true, min: 1 },
    transactionHash: { type: String, required: true, unique: true }, // Blockchain verification
    donorEmail: { type: String, required: false }, // Optional donor email
    donorAddress: { type: String, required: false }, // Optional donor location
}, { timestamps: true });

module.exports = mongoose.model("Donation", DonationSchema);
