import React, { useState } from 'react';
import {
  Map as LeafMap, TileLayer, Marker, Popup,
} from 'react-leaflet';

const Map = ({ position, zoom, ...rest }) => (
  <LeafMap center={position} zoom={zoom} style={{ height: '100%' }} {...rest}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </LeafMap>
);

export default Map;
