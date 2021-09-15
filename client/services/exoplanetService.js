import axios from 'axios';

class exoplanetService {
    static async getData() {
        try {
            const exoplanetData = await axios.get('http://localhost:3000/api/spaceData/exoplanet');
            console.log(exoplanetData);
            return exoplanetData.data;
        } catch (error) {
            console.log('There was an error getting exoplanet data');
        }
    }
}

export default exoplanetService;