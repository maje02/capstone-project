import React from 'react'
import Place from './Place'
import places from './places.json'
import City from './City'

export default function Home() {
  return (
    <>
      {renderCities()}
      {renderPlaces()}{' '}
    </>
  )

  function renderPlaces() {
    return places
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => a.city.localeCompare(b.city))
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
  function renderCities() {
    const cities = places.map(item => item.city)
    const uniqueCities = cities.filter(
      (city, index) => cities.indexOf(city) === index
    )
    //console.log(uniqueCities)
    return uniqueCities.map((city, index) => (
      <City key={index} city={city}>
        --- {city} ---
      </City>
    ))
  }
}
