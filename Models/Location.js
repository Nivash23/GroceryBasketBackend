const mongoose = require('mongoose');

const Locationschema = new mongoose.Schema({
    city: String,
    area: String
})
const Locations = mongoose.model('serviceavailablearea', Locationschema, 'serviceavailableareas');

module.exports=Locations