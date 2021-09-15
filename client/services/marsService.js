import axios from 'axios';

class MarsService {
    static async getImages(url, time, h) {
        try {
            const imageUrls = []
            const date = new Date();
            let day = date.getDate() - 7;
            let month = date.getMonth() + 1;
            const year = date.getFullYear();

            if (month < 10) {
                month = '0' + month;
            }
            if (day < 10) {
                day = '0' + day;
            }

            const image = await axios.get(`http://localhost:3000/api/spaceData/mars?year=${year}&month=${month}&day=${day}`)

            console.log('images: ', image.data.photos);

            for (let i = 0; i < image.data.photos.length; i++) {
                const imageUrl = image.data.photos[i].img_src;
                imageUrls.push(imageUrl);
            }

            return imageUrls;
        } catch (error) {
            console.log('There was an error getting Mars Images')
        }
    }
    
}


export default MarsService;