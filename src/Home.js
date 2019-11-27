import React from 'react'

import Place from './Place'
import placeData from './places.json'

export default function Home() {
  const places = placeData

  return places.map(
    ({ name, street, number, zip_code, city, categories }, index) => (
      <Place
        key={index}
        name={name}
        street={street}
        number={number}
        zip_code={zip_code}
        city={city}
        categories={categories}
      />
    )
  )
}
