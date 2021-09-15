const express = require('express');
const favoritesController = require('../controllers/favorites');

const favoritesRouter = express.Router();

favoritesRouter.post('/add', favoritesController.addFavorites, (req, res) => {
    res.status(200).send('test')
})

favoritesRouter.post('/get', favoritesController.getFavorites, (req, res) => {
    res.status(200).send(res.locals.favs)
})

module.exports = favoritesRouter;