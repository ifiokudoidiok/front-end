import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as actions from '../state/actions';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import refugeeOrgIcon from '../assets/icons/refugee-orgs.svg';
import Navigation from "../components/Website/Navigation";


const Volunteer = ({ volunteerPlaces, volunteerPlacesStatus, getVolunteerPlaces }) => {

    const [geolocation, setGeolocation] = useState({});
    const [selectedOrg, setSelectedOrg] = useState(null);
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100vh',
        latitude: 6.5243793,
        longitude: 3.3792057,
        zoom: 13
    })

    useEffect(() => {
        getVolunteerPlaces();
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setGeolocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            });
        } else {
            alert("Sorry, browser does not support geolocation!");
        }
    }, []) 

    useEffect(() => {
        setViewport({
            ...viewport,
            lat: geolocation.lat,
            lng: geolocation.lng
        })
    }, [geolocation])


    return (
        <>
            <Navigation noheader />
            <ReactMapGL 
                {...viewport} 
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/ofega/ck23uskqv1blh1cl78zq66r4r"
                onViewportChange={viewport => setViewport(viewport)}
            >

                {
                    volunteerPlacesStatus && 
                    volunteerPlaces.response.venues.map(org => (
                        <Marker
                            key={org.id}
                            latitude={org.location.lat}
                            longitude={org.location.lng}
                        >
                            <MapButton
                                className="marker-btn"
                                onClick={
                                    e => {
                                        e.preventDefault();
                                        setSelectedOrg(org);
                                    }
                                }
                            >
                                <img src={refugeeOrgIcon} alt="Refugee Organizations Icon" />
                            </MapButton>
                        </Marker>
                    ))
                }

                {
                    selectedOrg ? (
                        <Popup
                            latitude={selectedOrg.location.lat}
                            longitude={selectedOrg.location.lng}
                            onClose={() => {
                                setSelectedOrg(null);
                            }}
                        >
                            <div>
                                <h2>{selectedOrg.name}</h2>
                                <p>
                                    {selectedOrg.location.address || null} 
                                    {selectedOrg.location.city || null} 
                                    {", " + selectedOrg.location.country || null}
                                </p>
                            </div>
                        </Popup>
                    ) : null
                }

            </ReactMapGL>
        </>
    );
}

export default connect(state => state, actions)(Volunteer)

const MapButton = styled.button`
    background: transparent;
    border: none; 
    outline: none;
    height: 20px;
    width: 20px;
`