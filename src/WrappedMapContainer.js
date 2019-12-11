import React from 'react'
import { withScriptjs, withGoogleMap } from 'react-google-maps'
import Map from './Map'

export default function WrappedMapContainer({ places }) {
  const WrappedMap = withScriptjs(withGoogleMap(Map))
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <WrappedMap
        places={places}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDXO4wDcavRRGPPzTKliz-Arm9CgGWynNk`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}
