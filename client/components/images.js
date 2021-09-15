import React, { component, useState, useEffect } from 'react';

const Images = ({service}) => {
    const [imageLinks, setImageLinks] = useState([]);
    const [imageNumber, setImageNumber] = useState(0);

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

    return (
        <div className='image_component'>
            <button className='image_btns' onClick={() => handleImageNumberClickSubtract()}>Previous</button>
            <img className='img' src={imageLinks[imageNumber]}/>
            <button className='image_btns' onClick={() => handleImageNumberClickAdd()}>Next</button>
        </div>
    )
}

export default Images;