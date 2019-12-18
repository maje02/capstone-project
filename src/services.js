import * as firebase from 'firebase/app'
import 'firebase/firestore'

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
const db = firebase.firestore()

export function getData() {
  let array = []
  return db
    .collection('Places')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        array.push(doc.data())
      })
    })
    .then(() => array)
}

// To upload places to firestore
/* export function setData() {
  places.forEach(item => docRef.add(item))
} */
