const express = require('express');
const marsController = require('../controllers/mars');
const earthController = require('../controllers/earth');
const exoplanetController = require('../controllers/exoplanet');

const spaceDataRouter = express.Router();

//mars route
spaceDataRouter.get('/mars', 

    (req, res) => {
        res.status(200).json();
    }
);

//earth route
spaceDataRouter.get('/earth', 

    (req, res) => {
        res.status(200).send('routesworking!');
    }
);

//exoplanet route
spaceDataRouter.get('/exoplanet', 

    (req, res) => {
        res.status(200).json();
    }
)

module.exports = spaceDataRouter;