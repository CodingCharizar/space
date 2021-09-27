import { setInterval } from 'globalthis/implementation';
import React, { component, useState, useEffect } from 'react';
import favoriteService from '../services/favoriteService';
import { useInterval } from 'usehooks-ts'

const Images = ({service}) => {
    const [imageLinks, setImageLinks] = useState([]);
    const [imageNumber, setImageNumber] = useState(0);

    const favorite = (imageLinks !== undefined) ? imageLinks[imageNumber] : [];

    useEffect(async () => {
        const result = await service();
        console.log(result);
        setImageLinks(result);
    }, []);
    
    const handleImageNumberClickAdd = (e) => {
        let newNum = imageNumber + 1;
        if (newNum > imageLinks.length - 1) newNum = 0;
        setImageNumber(newNum);
        console.log(newNum, imageLinks[imageNumber]);
    }

    const handleImageNumberClickSubtract = (e) => {
        let newNum = imageNumber - 1;
        if (newNum < 0) newNum = imageLinks.length - 1;
        setImageNumber(newNum);
        console.log(newNum);
    }

    useInterval(()=> {
        handleImageNumberClickAdd()
    }, 1000)

    return (
        <div className='image_component'>
            {/* <button className='image_btns' onClick={() => handleImageNumberClickSubtract()}>Previous</button> */}
            <img className='img' src={favorite}/>
            <div className='right_btns'>
                {/* <button className='image_btns' onClick={() => handleImageNumberClickAdd()}>Next</button> */}
                {/* <button className='image_btns favorite' onClick={() => favoriteService.addFavorites(favorite)}>Favorite</button> */}
            </div>
        </div>
    )
}

export default Images;