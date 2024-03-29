import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={{destination}}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyC4cFiDp7KhKTVARpi-Zv6LgyBTG93o8QA"
        strokeWidth={3}
        strokeColor="#222"
        />
);

export default Directions;
