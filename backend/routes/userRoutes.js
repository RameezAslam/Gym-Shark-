const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/signup", async(req,res) => {
  try {
    const {firstName, lastName, DOB, email, password} = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json( { message: "User already exists" });

     user = new User({ firstName, lastName, DOB, email, password });
     await user.save();

    res.status(201).json({
        success: true,
        user
    });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

router.post("/login", async(req,res) => {
    try {
       const { email, password } = req.body;

       let user = await User.findOne({ email });

       if(!user) 
        return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await user.matchPassword(password);
        if(!isMatch) 
            return res.status(400).json({ message: "Invalid Credentials" });

        
        res.status(200).json({
            success: true,
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
})

module.exports = router;