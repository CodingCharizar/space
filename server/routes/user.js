const express = require('express');
const userController = require('../controllers/user');
const cookieController = require('../controllers/cookies');
const userRouter = express.Router();


userRouter.post('/logIn', userController.logIn,  (req, res) => {
    return res.status(200).json(res.locals.loggedIn)
})

userRouter.post('/signUp', userController.signUp, userController.logIn,  (req, res ) => {
    return res.status(200).json(res.locals.loggedIn)
})

module.exports = userRouter;
