const axios = require('axios');
const { console } = require('globalthis/implementation');

const earth = {};

//get image data with API call
earth.getImages = async function(req, res, next) {
    try {
        console.log('getting earth images within earth.js!')
        const { year, month, day } = req.query;
        console.log(year, month, day)

        //updated query to only receive the most recent images, rather than through a specific date 
        const imageData = await axios.get(`https://epic.gsfc.nasa.gov/api/natural/images`);
        console.log('image data looks like this: ', imageData.data)
        res.locals.imageData = imageData.data;
        return next();
    } catch (error) {
        return next('There was an error receiving earth photos in earth.js: ', error);
    }
}

module.exports = earth;