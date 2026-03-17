const express = require("express");
const router = express.Router();

function estimateDistance(from, to) {
    
    return Math.floor(Math.random() * 200) + 50; 
}

function costByMode(distance, mode) {
    const rates = {
        car: 12,       // ₹12 per km
        bike: 3,       // ₹3 per km
        bus: 1.5,      // ₹1.5 per km
        train: 0.9,    // ₹0.9 per km
        flight: 5      // ₹5 per km (dummy)
    };
    return Math.round(distance * (rates[mode] || 10));
}

router.get("/", (req, res) => {
    const { from, to, mode } = req.query;

    if (!from || !to) {
        return res.json({ error: "From and To are required" });
    }

    const distance = estimateDistance(from, to);
    const cost = costByMode(distance, mode);

    res.json({
        from,
        to,
        mode,
        distance,
        cost
    });
});

module.exports = router;
