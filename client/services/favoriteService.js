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
        console.log('url', url)
        const result = await fetch('/api/favorites/addFavorites/',{
            method : 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'url': url,
            })
        });

    }

    //get fav
    static async getFavorites() {
    //     try {
    //         const result = await axios.get('http://localhost:3000/api/favorites/getFavorites', {withCredentials: true})
    //         const res = result.data
    //         console.log(res)
    //     } catch (error) {
    //         console.log('There was an error getting favorites')
    //     }
        
    // }

    const result = await fetch(`/api/favorites/getFavorites/`, {
        credentials: 'include',
    })
    console.log('result', result)
    const data = await result.json();
    console.log('data', data);
}
}

export default favoriteService;