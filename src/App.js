import React from 'react'
import places from './places.json'
import AppLayout from './AppLayout'
import Header from './Header'
import Home from './Home'
import WrappedMap from './WrappedMapContainer'

function App() {
  return (
    <AppLayout>
      <Header>make it stay</Header>
      {/* <Home places={places} /> */}
      <WrappedMap places={places} />
      <div>NAV</div>
    </AppLayout>
  )
}

export default App
