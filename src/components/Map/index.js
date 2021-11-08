import React from 'react';
import PropTypes from 'prop-types';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

import './style.scss';

const Map = ({ coordinates, city }) => {
  const x = coordinates[1] ? coordinates[1] : 49;
  const y = coordinates[0] ? coordinates[0] : 5;

  return (
    <MapContainer center={[x, y]} zoom={14} scrollWheelZoom className="mapContainer">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[x, y]}>
        <Popup>
          {city}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  coordinates: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
};

Map.defaultProps = {

};

export default Map;
