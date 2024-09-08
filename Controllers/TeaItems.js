const TeaRouter = require('express').Router();

const smartbasketItems = require('../Models/smartbasketItems');

TeaRouter.get('/', async (req, res) => {
    const TeaItems = await smartbasketItems.find({ Maincategory: "Tea" });

    if (!TeaItems)
    {
        res.status(404).json({
            message:"Product not found..."
        })
    }
    else {
        res.status(200).json({
            TeaItems
        })
    }
})

module.exports = TeaRouter;