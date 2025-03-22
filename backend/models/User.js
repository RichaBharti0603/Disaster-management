const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    address: String,
    password: String, // Ideally hashed
    role: { type: String, enum: ["user", "admin", "ngo"], default: "user" }
});

module.exports = mongoose.model("User", UserSchema);
