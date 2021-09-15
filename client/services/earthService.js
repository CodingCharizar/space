import axios from 'axios';

//need date info
//make call to backend @ /api/spaceData/earth
//build object with image URLs based on data from backend call and dates

class EarthService {
    static async getImages(url, time, h) {
        try {
            const imageUrls = [];
            const date = new Date();
            let day = date.getDate() - 4;
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            const image = await axios.get(`http://localhost:3000/api/spaceData/earth?year=${year}&month=${month}&day=${day}`);
            
            for (let i = 0; i < image.data.length; i++) {
                const imageKey = image.data[i].image;
                const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${imageKey}.png`;
                imageUrls.push(imageUrl);
            }

            return imageUrls;
        } catch (error) {
            console.log('There was an error getting Earth Images')
        }
    }
}

export default EarthService;