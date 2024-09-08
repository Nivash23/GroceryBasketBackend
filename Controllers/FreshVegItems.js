const FreshvegRouter = require('express').Router();
const smartbasketItems = require('../Models/smartbasketItems');


FreshvegRouter.get('/', async (req, res) => {
    const FreshvegItems = await smartbasketItems.find({ Maincategory: "Freshveg" });

    if (!FreshvegItems)
    {
        res.status(404).json({
            message:"product not found"
        })
    }
    else {
        res.status(200).json({
            FreshvegItems
        })
    }
})

module.exports = FreshvegRouter;