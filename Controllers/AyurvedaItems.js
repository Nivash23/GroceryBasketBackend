const AyurvedaRouter = require('express').Router();

const smartbasketItems = require('../Models/smartbasketItems');

AyurvedaRouter.get('/', async (req, res) => {
    const AyurvedaItems = await smartbasketItems.find({ Maincategory: "Ayurveda" });

    if (!AyurvedaItems)
    {
        res.status(404).json({
            message:"Product not found..."
        })
    }
    else {
        res.status(200).json({
            AyurvedaItems
        })
    }
})

module.exports = AyurvedaRouter;