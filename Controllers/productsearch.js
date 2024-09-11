const ProductsearchRouter = require('express').Router();
const SmartBasketItems = require('../Models/smartbasketItems');


ProductsearchRouter.post('/', async (req, res) => {
    const { searchitem } = req.body;

    const items = await SmartBasketItems.find({ Maincategory: { $regex: `${searchitem}`, $options: "i" } })
    if (items.length==0)
        {
        res.status(404).json({
            message:"not found"
        })
    }
    else 
    {

        res.status(200).json({
            items
        })
    }
})

module.exports = ProductsearchRouter;