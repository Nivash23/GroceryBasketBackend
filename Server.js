const express = require('express');
const cors=require('cors')
const app = express();

const SmartbasketRouter = require('./Controllers/smartbasketItems');
const ExoticRouter = require('./Controllers/ExoticItems');
const TeaRouter = require('./Controllers/TeaItems');
const GheeRouter = require('./Controllers/GheeItems');
const MilksRouter = require('./Controllers/MilksItems');
const FreshvegRouter = require('./Controllers/FreshVegItems');
const LocationsRouter = require('./Controllers/locations');
const AyurvedaRouter = require('./Controllers/AyurvedaItems'); 
const ProductsearchRouter = require('./Controllers/productsearch');

const RegistrationRouter = require('./Controllers/Registration');

app.use(express.json());

app.use(cors());

app.use('/api/smartbasket/', SmartbasketRouter);
app.use('/api/Exoticfruitsandveg/', ExoticRouter);
app.use('/api/Tea/', TeaRouter);
app.use('/api/ghee/', GheeRouter);
app.use('/api/Milks/', MilksRouter);
app.use('/api/Freshveg/', FreshvegRouter);
app.use('/api/register/', RegistrationRouter);
app.use('/api/locations/', LocationsRouter);
app.use('/api/Ayurveda/', AyurvedaRouter);
app.use('/api/productsearch/',ProductsearchRouter)




module.exports = app;

