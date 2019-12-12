import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import Place from './Place'

export default function Map({ places, index }) {
  const [selectedPlace, setSelectedPlace] = useState(null)
  return (
    <GoogleMap
      style={{ position: 'relative' }}
      defaultZoom={10}
      defaultCenter={{
        lat: selectedPlace ? selectedPlace.location[0] : 53.551086,
        lng: selectedPlace ? selectedPlace.location[1] : 9.993682,
      }}
    >
      {places.map(place => (
        <Marker
          key={index}
          position={{ lat: place.location[0], lng: place.location[1] }}
          onClick={() => setSelectedPlace(place)}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.location[0],
            lng: selectedPlace.location[1],
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <h2>{selectedPlace.name}</h2>
        </InfoWindow>
      )}
      {selectedPlace && (
        <MapPlace
          key={index}
          name={selectedPlace.name}
          street={selectedPlace.street}
          number={selectedPlace.number}
          zip_code={selectedPlace.zip_code}
          city={selectedPlace.city}
          phone={selectedPlace.phone}
          mail={selectedPlace.mail}
          websiteURL={selectedPlace.websiteURL}
          opening_times={selectedPlace.opening_times}
          description={selectedPlace.description}
          categories={selectedPlace.categories}
        />
      )}
    </GoogleMap>
  )
}

const MapPlace = styled(Place)`
  position: absolute;
  top: 150px;
  left: 10px;
  z-index: 10;
`
