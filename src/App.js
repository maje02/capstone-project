import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getData } from './services'
import AppLayout from './AppLayout'
import Header from './Header'
import Home from './Home'
import WrappedMap from './WrappedMapContainer'
import Navigation from './Navigation'

export default function App() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    getData().then(setPlaces)
  }, [])

  return (
    <Router>
      <AppLayout>
        <Header>make it stay</Header>
        <Switch>
          <Route exact path="/">
            <Home places={places} />
          </Route>
          <Route path="/map">
            <WrappedMap places={places} />{' '}
          </Route>
        </Switch>
        <Navigation />
      </AppLayout>
    </Router>
  )
}
