import React, { component, useState, useEffect } from 'react';
import EarthService from '../services/earthService';
import Images from '../components/images';

const EarthContainer = () => {

    return (
        <div className='earth_container'>
            <Images service={EarthService.getImages}/>
        </div>
    )
}

export default EarthContainer;