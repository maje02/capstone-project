import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
/* import * as firebase from 'firebase/app'
import 'firebase/firestore' */
import { getData } from './services'
import AppLayout from './AppLayout'
import Header from './Header'
import Home from './Home'
import WrappedMap from './WrappedMapContainer'
import Navigation from './Navigation'

/* import places from './places.json'
console.log('Places from json', places) */
/* 
var firebaseConfig = {
  apiKey: 'AIzaSyDXO4wDcavRRGPPzTKliz-Arm9CgGWynNk',
  authDomain: 'make-it-stay-1576060455017.firebaseapp.com',
  databaseURL: 'https://make-it-stay-1576060455017.firebaseio.com',
  projectId: 'make-it-stay-1576060455017',
  storageBucket: 'make-it-stay-1576060455017.appspot.com',
  messagingSenderId: '141290955009',
  appId: '1:141290955009:web:4b15bb2aaa11d7aa66bb00',
  measurementId: 'G-P453W0BRKZ',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore() */

/* function getData() {
  let array = []
  db.collection('Places')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        array.push(doc.data()) */

/* console.log(doc.id, ' => ', doc.data()) */
/*       })
    })
    .then(() => array)
  console.log('Array', array)
} */

export default function App() {
  const [places, setPlaces] = useState([])
  useEffect(() => {
    getData().then(setPlaces)
  }, [])
  console.log('Places', places)
  /* getData().then(setPlaces)
  console.log(places) */
  /*  const [places, setPlaces] = useState([])
  useEffect(() => {
    getData().then(setPlaces)
  }, [])
  console.log(places) */
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
