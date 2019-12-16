import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { GoogleMap, Marker } from 'react-google-maps'
import Place from './Place'
import location from './img/location.svg'
import location_selected from './img/location_selected.svg'

export default function Map({ places, index }) {
  const [selectedPlace, setSelectedPlace] = useState(null)
  return (
    <GoogleMap
      style={{ position: 'relative' }}
      defaultZoom={12}
      defaultCenter={{
        lat: selectedPlace ? selectedPlace.location[0] : 53.565443,
        lng: selectedPlace ? selectedPlace.location[1] : 9.943724,
      }}
    >
      {places.map(place => (
        <Marker
          key={index}
          position={{ lat: place.location[0], lng: place.location[1] }}
          onClick={() => setSelectedPlace(place)}
          icon={{
            url: place === selectedPlace ? location_selected : location,
            scaledSize: new window.google.maps.Size(30, 30),
          }}
        />
      ))}
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
  bottom: 50px;
  left: 10px;
  width: 300px;
  max-height: 450px;
  overflow: scroll;
`
