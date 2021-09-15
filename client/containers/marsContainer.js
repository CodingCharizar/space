import React, { component, useState, useEffect } from 'react';
import Images from '../components/images';
import MarsService from '../services/marsService';

const MarsContainer = () => {

    return (
        <div>
            <Images service={MarsService.getImages}/>
        </div>
    )
}

export default MarsContainer;