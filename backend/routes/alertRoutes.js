const express = require("express");
const Alert = require("../models/Alert");
const router = express.Router();


router.get("/", async (req, res) => {
    const alerts = await Alert.find();
    res.json(alerts);
});

router.post("/", async (req, res) => {
    const alert = new Alert(req.body);
    await alert.save();
    res.json(alert);
});

module.exports = router;