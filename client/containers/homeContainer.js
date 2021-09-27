import React, { component, useState, useEffect } from 'react';
import HomeService from '../services/homeService'
import Images from '../components/images';
import { console } from 'globalthis/implementation';

const HomeContainer = () => {
const [imageLinks, setImageLinks] = useState([]);
const [titleName, setTitleName] = useState('');
const [description, setDescription] = useState('');

const links = (imageLinks !== undefined) ? imageLinks : [];
useEffect(async () => {
    const result = await HomeService.getImages();
    console.log(result.data)
    setTitleName(result.data.title)
    setDescription(result.data.explanation)
    setImageLinks(result.data.url)
}, [])
    return (
        <div className='home_container'>
            <div className='home_title'>Image of the Day</div>
            <div>{titleName}</div>
            <img className='img' src={links}/>
            <div>{description}</div>
        </div>
    )
}

export default HomeContainer