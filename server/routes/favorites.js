const express = require('express');
const favoritesController = require('../controllers/favorites');

const favoritesRouter = express.Router();

favoritesRouter.post('/addFavorites', favoritesController.addFavorites, (req, res) => {
    res.status(200).send('test')
})

favoritesRouter.get('/getFavorites', favoritesController.getFavorites, (req, res) => {
    res.status(200).json(res.locals.favs)
})

module.exports = favoritesRouter;