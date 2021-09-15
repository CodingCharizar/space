import React, { component, useState, useEffect } from 'react';
import exoplanetService from '../services/exoplanetService';

const SpaceContainer = () => {
    const [planetObj, setPlanetObj] = useState([]);
    const [planetNames, setPlanetNames] = useState([]);


    useEffect(async () => {
        const data = await exoplanetService.getData();
        console.log('data coming through: ', data)
        setPlanetObj(data);
    }, [])
    
    useEffect(async () => {
        const tempPlanetNames = []; 
        for (let planet = 0; planet < planetObj.length; planet++) {
            tempPlanetNames.push(<button id={planet} onClick={() => getPlanetData(planet)}>{planetObj[planet].pl_name}</button>); 
        }
        setPlanetNames(tempPlanetNames);
    }, [planetObj]);
//make a list based on planet names that point to the planets in the planet obj
//on click of planet in list, render the associated planet data

    function getPlanetData(num) {
        const planetName = planetObj[num].pl_name;
        const planetMass = planetObj[num].pl_masse;
        const planetOrbitalPeriod = planetObj[num].pl_orbper;
        const planetOrbitalRadius = planetObj[num].pl_orbsmax;
        const systemMoons = planetObj[num].sy_mnum;
        const systemPlanets = planetObj[num].sy_pnum;
        const systemStars = planetObj[num].sy_snum;

        console.log(`${planetName} shares its solar system with ${systemPlanets} other planets, ${(systemMoons > 0) ? `at least ${systemMoons} moons` : 'no confirmed moons'}, and ${systemStars} stars.`);
        console.log(`${planetName} is about ${planetMass} times ${(planetMass > 1) ? 'larger' : 'smaller'} than our planet Earth. It's orbital period is ${(planetOrbitalPeriod !== null) ? `${planetOrbitalPeriod} earth days` : 'unknown at this time'} and it orbits ${(planetOrbitalRadius > 1) ? `${planetOrbitalRadius} times further away from its host star(s) than our Earth` : `${planetOrbitalRadius} times closer to its host star(s) than our Earth`}`);

        return (
            <div>
                <h1>{planetName}</h1>
                <p>{`${planetName} shares its solar system with ${systemPlanets} other planet(s), ${(systemMoons > 0) ? `at least ${systemMoons} moons` : 'no confirmed moons'}, and ${systemStars} star(s).`}</p>
                <p>{`${planetName} is about ${planetMass} times ${(planetMass > 1) ? 'larger' : 'smaller'} than our planet Earth. It's orbital period is ${(planetOrbitalPeriod !== null) ? `${planetOrbitalPeriod} earth days` : 'unknown at this time'} and it orbits ${(planetOrbitalRadius > 1) ? `${planetOrbitalRadius} times further away from its host star(s) than our Earth` : `${planetOrbitalRadius} times closer to its host star(s) than our Earth`}`}</p>
            </div>
        )
    }

    if (!planetObj.length) return <h1>Loading!!!</h1>
    return (
        <div className='space_container'>
            {/* <h1>this is space sdf container</h1> */}
            {planetNames}
        </div>
    )
}

export default SpaceContainer;