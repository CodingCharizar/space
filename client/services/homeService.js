import axios from 'axios';
import { console } from 'globalthis/implementation';

class HomeService {
    static async getImages(url) {
        try {
            console.log('attempting to get image of the day in home service')
            const image = await axios.get('http://localhost:3000/api/spaceData/home')
            // console.log(image)
            return image
        } catch (error) {
            console.log('There was an error getting the image of the day:', error)
        }
    }
}

export default HomeService