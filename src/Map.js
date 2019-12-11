import React from 'react'
import { GoogleMap, Marker } from 'react-google-maps'

export default function Map({ places, index }) {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
    >
      {places.map(place => (
        <Marker
          key={index}
          position={{ lat: place.location[0], lng: place.location[1] }}
        />
      ))}
    </GoogleMap>
  )
}
