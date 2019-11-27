import React from 'react'

import Place from './Place'
import places from './places.json'

export default function Home() {
  return places
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ name, street, number, zip_code, city, categories }, index) => (
      <Place
        key={index}
        name={name}
        street={street}
        number={number}
        zip_code={zip_code}
        city={city}
        categories={categories}
      />
    ))
}
