import React from 'react'
import logo from '../Title2.png'; // Tell Webpack this JS file uses this image

const appTitle = () => {
    return (
        <div className="homecontainer-logocontainer">
            <img src={logo} alt="PlanetFinder" height="100" width="260"/>
        </div>
    )
}

export default appTitle