import axios from 'axios';
import { console } from 'globalthis/implementation';

//need date info
//make call to backend @ /api/spaceData/earth
//build object with image URLs based on data from backend call and dates

class EarthService {
    static async getImages(url, time, h) {
        try {
            console.log('attempting to get earch images!')
            const imageUrls = [];
            const date = new Date();
            let day = date.getDate() - 6;
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (month < 10) month = '0' + month;        
            if (day < 10) day = '0' + day;
    
            console.log(year, month, day)

            // const image = await axios.get(`http://localhost:3000/api/spaceData/earth?year=${year}&month=${month}&day=${day}`);
            const image = await axios.get(`http://localhost:3000/api/spaceData/earth`);
            console.log(image.data, 'this is the image')

            //should look something like this
            //https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png


            for (let i = 0; i < image.data.length; i++) {
                const imageKey = image.data[i].image;
                // console.log(imageKey)
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