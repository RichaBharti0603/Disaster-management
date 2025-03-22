const express = require("express");
const router = express.Router();

// Dummy route for testing
router.get("/", (req, res) => {
    res.send("Donation Routes Working!");
});

module.exports = router;
