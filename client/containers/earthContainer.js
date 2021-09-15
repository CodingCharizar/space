import React, { component, useState, useEffect } from 'react';
import EarthService from '../services/earthService'

const EarthContainer = () => {
    const [imageLinks, setImageLinks] = useState([]);
    const [imageNumber, setImageNumber] = useState(0);

    useEffect(async () => {
        const result = await EarthService.getImages()
        console.log(result);
        setImageLinks(result);
    }, []);
    
    const handleImageNumberClickAdd = (e) => {
        let newNum = imageNumber + 1;
        if (newNum > imageLinks.length - 1) newNum = 0;
        setImageNumber(newNum);
        console.log(newNum);
    }

    const handleImageNumberClickSubtract = (e) => {
        let newNum = imageNumber - 1;
        if (newNum < 0) newNum = imageLinks.length - 1;
        setImageNumber(newNum);
        console.log(newNum);
    }
    

    return (
        <div className='earth_container'>
            <h1>this is earth container</h1>
            <button className='earth_btns' onClick={() => handleImageNumberClickSubtract()}/>
            <img className='earth_img' src={imageLinks[imageNumber]}/>
            <button className='earth_btns' onClick={() => handleImageNumberClickAdd()}/>
        </div>
    )
}

export default EarthContainer;