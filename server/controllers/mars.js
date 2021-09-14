const axios = require('axios');
require('dotenv').config();
const apiKey = process.env.NASA_API_KEY;

const mars = {};

//get image links with API call
mars.getImages = async function(req, res, next) {
    try {
        const { year, month, day } = req.query;
        const imageData = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${year}-${month}-${day}&api_key=${apiKey}`);
        res.locals.imageData = imageData.data;
        return next();
    } catch (error) {
        return next(error);
    }
}

module.exports = mars;