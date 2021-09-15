import axios from 'axios';

class favoriteService {
    //add fav
    static async addFavorites(url) {
        // try {
        //     console.log('entered add faves', url);
        //     await axios.post('http://localhost:3000/api/favorites/addFavorites', {
        //         url: url
        //     }
        //     // {
        //     //     withCredentials: true
        //     // }
        //     );
        //     return;
        // } catch (error) {
        //     console.log('There was an error in adding favorites');
        // }
    }

    //get fav
    static async getFavorites() {
        try {
            const result = await axios.get('http://localhost:3000/api/favorites/getFavorites', {withCredentials: true})
            const res = result.data
            console.log(res)
        } catch (error) {
            console.log('There was an error getting favorites')
        }
        
    }
}

export default favoriteService;