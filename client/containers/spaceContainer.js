import React, { component, useState, useEffect } from 'react';
import exoplanetService from '../services/exoplanetService';

const SpaceContainer = () => {
    const [planetObj, setPlanetObj] = useState([]);
    const [planetNames, setPlanetNames] = useState([]);
    const [planetInfo, setPlanetInfo] = useState([]);

    useEffect(async () => {
        const data = await exoplanetService.getData();
        setPlanetObj(data);
    }, [])
    
    useEffect(async () => {
        const tempPlanetNames = []; 
        for (let planet = 0; planet < planetObj.length; planet++) {
            tempPlanetNames.push(<button className='image_btns' id={planet} onClick={() => getPlanetData(planet)}>{planetObj[planet].pl_name}</button>); 
        }
        setPlanetNames(tempPlanetNames);
    }, [planetObj]);

    function getPlanetData(num) {
        const planetName = planetObj[num].pl_name;
        const planetMass = planetObj[num].pl_masse;
        const planetOrbitalPeriod = planetObj[num].pl_orbper;
        const planetOrbitalRadius = planetObj[num].pl_orbsmax;
        const systemMoons = planetObj[num].sy_mnum;
        const systemPlanets = planetObj[num].sy_pnum;
        const systemStars = planetObj[num].sy_snum;
        const planetStuff = [];

        planetStuff.push(<h1>{planetName}</h1>);
        planetStuff.push(<p>{`${planetName} shares its solar system with ${systemPlanets} other planet(s), ${(systemMoons > 0) ? `at least ${systemMoons} moons` : 'no confirmed moons'}, and ${systemStars} star(s).`}</p>);
        planetStuff.push(<p>{`${planetName} is about ${planetMass} times ${(planetMass > 1) ? 'larger' : 'smaller'} than our planet Earth. It's orbital period is ${(planetOrbitalPeriod !== null) ? `${planetOrbitalPeriod} earth days` : 'unknown at this time'} and it orbits ${(planetOrbitalRadius > 1) ? `${planetOrbitalRadius} times further away from its host star(s) than our Earth` : `${planetOrbitalRadius} times closer to its host star(s) than our Earth`}`}</p>);

        setPlanetInfo(planetStuff);
    }

    if (!planetObj.length) return <h1>Loading!!!</h1>
    return (
        <div className='space_container'>
            <div className='planet_names'>
                {planetNames}
            </div>
            <div className='planet_info'>
                {planetInfo}
            </div>
        </div>
    )
}

export default SpaceContainer;