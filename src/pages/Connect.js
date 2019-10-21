import React, { useState } from "react";
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
    })


    return (
        <ReactMapGL 
            {...viewport} 
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => {
                setViewport(viewport);
            }}
        ></ReactMapGL>
    );
}

export default Map