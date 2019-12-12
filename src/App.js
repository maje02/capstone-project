import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import places from './places.json'
import AppLayout from './AppLayout'
import Header from './Header'
import Home from './Home'
import WrappedMap from './WrappedMapContainer'

function App() {
  return (
    <Router>
      <AppLayout>
        <Header>make it stay</Header>
        <Switch>
          <Route exact path="/">
            <Home places={places} />
          </Route>
          <Route path="/map">
            <WrappedMap places={places} />
          </Route>
        </Switch>
        <div>NAV</div>
      </AppLayout>
    </Router>
  )
}

export default App
