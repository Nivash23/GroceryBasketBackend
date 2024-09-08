const mongoose = require('mongoose');


const smartItemsSchema =new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    imgsrc: String,
    offer: Number,
    Maincategory: String,
    category:String,
})

const SmartBasketItems = mongoose.model('smartbasketItem', smartItemsSchema, 'smartbasketItems'); 


module.exports = SmartBasketItems;