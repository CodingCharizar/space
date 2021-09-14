const express = require('express');
const favoritesController = require('../controllers/favorites');

const favoritesRouter = express.Router();

favoritesRouter.post('/add', favoritesController.addFavorites, (req, res) => {
    res.status(200).send('tes')
})

module.exports = favoritesRouter;