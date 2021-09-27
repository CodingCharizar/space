const axios = require('axios');
const { console } = require('globalthis/implementation');

const home = {};

home.getImages = async function (req, res, next) {
    try {
        console.log('getting image of the day within home controller.js ')
        const imageData = await axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        console.log(imageData)
        res.locals.imageData = imageData.data
        return next();
    } catch (error) {
        console.log(error, 'There was an error getting the image of the day')
    }
}

module.exports = home;



