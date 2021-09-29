const express = require('express');
const marsController = require('../controllers/mars');
const earthController = require('../controllers/earth');
const exoplanetController = require('../controllers/exoplanet');
const homeController = require('../controllers/homeController')

const spaceDataRouter = express.Router();

spaceDataRouter.get('/home', homeController.getImages, (req, res) => {
    res.status(200).json(res.locals.imageData)
})

//mars route
spaceDataRouter.get('/mars', 
    marsController.getImages,
    (req, res) => {
        res.status(200).json(res.locals.imageData);
    }
);

//earth route
spaceDataRouter.get('/earth', 
    earthController.getImages,
    (req, res) => {
        res.status(200).json(res.locals.imageData);
    }
);

//exoplanet route
spaceDataRouter.get('/exoplanet', 
    exoplanetController.getData,
    (req, res) => {
        res.status(200).json(res.locals.exoplanetData);
    }
)

module.exports = spaceDataRouter;