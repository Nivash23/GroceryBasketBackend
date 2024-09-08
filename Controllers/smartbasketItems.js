const SmartbasketRouter = require('express').Router();
const SmartBasketItems = require('../Models/smartbasketItems');


SmartbasketRouter.get('/', async(req,res) => {
    const smartItems = await SmartBasketItems.find();

    res.status(200).json({
        smartItems
    })
})

module.exports = SmartbasketRouter;