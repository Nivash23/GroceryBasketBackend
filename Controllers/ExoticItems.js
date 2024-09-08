const ExoticRouter = require('express').Router();
const smartbasketItems = require('../Models/smartbasketItems');


ExoticRouter.get('/', async (req, res) => {
    const exoticItems = await smartbasketItems.find({ Maincategory: "Exotic" });

    if (!exoticItems)
    {
        res.status(404).json({
            message:"product not found"
        })
    }
    else {
        res.status(200).json({
            exoticItems
        })
    }
})

module.exports = ExoticRouter;