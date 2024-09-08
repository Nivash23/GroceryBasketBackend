const GheeRouter = require('express').Router();

const smartbasketItems = require('../Models/smartbasketItems');

GheeRouter.get('/', async (req, res) => {
    const GheeItems = await smartbasketItems.find({ Maincategory: "Ghee" });

    if (!GheeItems)
    {
        res.status(404).json({
            message:"Product not found..."
        })
    }
    else {
        res.status(200).json({
            GheeItems
        })
    }
})

module.exports = GheeRouter;