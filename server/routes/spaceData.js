const express = require('express');
const marsController = require('../controllers/mars');
const earthController = require('../controllers/earth');
const exoplanetController = require('../controllers/exoplanet');

const spaceDataRouter = express.Router();

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
        console.log('finished spaceDataRouter: ', res.locals.photo);
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