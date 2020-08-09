const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = new User({email, password});
        await user.save();

        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        res.send({token});
    } catch (error) {
        res.status(422).send(error.message);
    }
    
});

router.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(422).send({error: 'You must provide email and password to log in.'});
    }

    const user = await User.findOne({ email });
    if (!user) {
        res.status(404).send({error: 'Email you entered is not registered.'});
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, 'MY_SECRET_KEY');
        res.send({token});
    } catch (error) {
        res.status(422).send({error: 'Invalid password or email.'});
    }
    
});

module.exports = router;