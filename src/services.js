import * as firebase from 'firebase/app'
import 'firebase/firestore'

/* import places from './places.json' */

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

/* const docRef = db.collection('Places') */

export async function getData() {
  let places = []
  console.log(places)
  db.collection('Places')
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        places.push(doc.data())
        /* console.log(doc.id, ' => ', doc.data()) */
      })
    })
    .then(() => places)
}

/*  .get()
    .then(function(collection) {
      if (db.collection.exists) {
        console.log(doc)
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    }) */

/* export function setData() {
  places.forEach(item => docRef.add(item))
} */
