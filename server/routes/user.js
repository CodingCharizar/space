const express = require('express');
const userController = require('../controllers/user');

const userRouter = express.Router();

userRouter.post('/signUp', userController.signUp, (req, res ) => {
    return res.status(200).send(res.locals.id)
})

module.exports = userRouter;
