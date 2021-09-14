const axios = require('axios');

const exoplanet = {};

//make API call and pass back JSON object to the frontend
exoplanet.getData = async function(req, res, next) {
    try {
        const exoplanetData = await axios.get('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name,pl_masse,sy_mnum,sy_snum,sy_pnum,pl_orbper,pl_orbsmax+from+ps+where+pl_masse+between+0.5+and+2.0&format=json');
        res.locals.exoplanetData = exoplanetData.data;
        return next();
    } catch (error) {
        console.log('Error in exoplanet.getData: ', error);
        return next(error);
    }
}

module.exports = exoplanet;