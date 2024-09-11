const RegistrationRouter = require('express').Router();
const User = require('../Models/Registration');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {JWT_SECRET}=require('../utils/config')

RegistrationRouter.post('/', async (req, res) => {
    const { name, email, Password } = req.body;

    const searchuser = await User.findOne({ Email: email });

    if (searchuser){
        res.status(400).json({
             message:"User already exists..."
        })
    }
    else {
        
        const hashpassword =bcrypt.hash(Password, 10);

        const newuser = new User({
            Name:name,
            Email:email,
            hashpassword
        })

        await newuser.save();

        res.status(200).json({
            message:"User Registered Sucessfully..."
        })

    }


})

RegistrationRouter.post('/login/', async(req,res) => {
    const { email, Password } = req.body;

    const LoginUser = await User.findOne({ Email: email });

    const passAuthenticate =bcrypt.compare(Password, LoginUser.hashpassword);

    if (LoginUser)
    {
        if (passAuthenticate)
        {
            const payload = {
                username: LoginUser.Email,
                id:LoginUser._id
            }
            const token = jwt.sign(payload, JWT_SECRET);
            res.status(200).json({
                message: "User Login sucessfully...",
                token
                
            })

        }
        else {
            res.status(400).json({
                message:"Incorrect password"
            })
        }
    }
    else {
        res.status(400).json({
            message:"Email or password Incorrect..."
        })
    }
})

module.exports = RegistrationRouter;
