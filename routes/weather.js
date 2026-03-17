const express = require("express");
const router = express.Router();
const getWeather = require("../utils/weather");

router.get("/", async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.json({ error: "City is required" });
    }

    const weather = await getWeather(city);

    if (!weather) {
        return res.json({ error: "City not found" });
    }

    res.json(weather);
});

module.exports = router;
