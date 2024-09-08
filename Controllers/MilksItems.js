const MilksRouter = require('express').Router();

const smartbasketItems = require('../Models/smartbasketItems');

MilksRouter.get('/', async (req, res) => {
    const MilksItems = await smartbasketItems.find({ Maincategory: "Milks" });

    if (!MilksItems)
    {
        res.status(404).json({
            message:"Product not found..."
        })
    }
    else {
        res.status(200).json({
            MilksItems
        })
    }
})

module.exports = MilksRouter;