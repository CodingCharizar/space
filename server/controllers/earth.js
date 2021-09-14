const axios = require('axios');

const earth = {};

//get image data with API call
earth.getImages = async function(req, res, next) {
    try {
        const { year, month, day } = req.query;
        const imageData = await axios.get(`https://epic.gsfc.nasa.gov/api/natural/date/${year}-${month}-${day}`);
        res.locals.imageData = imageData.data;
        return next();
    } catch (error) {
        return next(error);
    }
}

module.exports = earth;