import React, { component, useState, useEffect } from 'react';
import favoriteService from '../services/favoriteService'
import Images from '../components/images';

const HomeContainer = () => {

    return (
        <div>
            <Images service={favoriteService.getFavorites}/>
        </div>
    )
}

export default HomeContainer