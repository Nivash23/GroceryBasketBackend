const LocationsRouter = require('express').Router();
const Locations = require('../Models/Location');

LocationsRouter.get('/', async (req, res) => {
    const location = await Locations.find();

    res.status(200).json({
        location
    })
})

module.exports = LocationsRouter;
