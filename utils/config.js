require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URL;
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET;

module.exports={PORT,MONGODB_URI,JWT_SECRET}