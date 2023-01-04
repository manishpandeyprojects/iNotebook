const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using: POST "/api/auth/createuser".  No login required
router.post('/createuser',
    body('email', 'Please enter the valid email.').isEmail(),
    body('password', 'Password length should have atleast 5 character.').isLength({ min: 5 }),  
    body('name', 'Please enter the valid name').isLength({ min: 3 }),
    async (req, res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check the whether user with this email exist already
        try{
            let user = await User.findOne({email: req.body.email});
            if(user){
                return res.status(400).json({error: "Sorry a user with this email already exist"})
            }
            user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            })

            res.json(user);
        }catch(error){
            console.log(error.message);
            req.status(500).send("Some error occured");
        }
})

module.exports = router;