import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

import './style.scss';

const Map = () => {
  const x = 49;
  const y = 5;
  console.log('x, y = ', x, y);
  return (
    <MapContainer center={[x, y]} zoom={13} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[x, y]} />
    </MapContainer>
  );
};

Map.propTypes = {

};

Map.defaultProps = {

};

export default Map;
