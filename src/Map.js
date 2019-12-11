import React from 'react'
import { GoogleMap } from 'react-google-maps'

export default function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 53.551086, lng: 9.993682 }}
    ></GoogleMap>
  )
}
