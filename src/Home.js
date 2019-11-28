import React from 'react'
import places from './places.json'
import City from './City'

export default function Home() {
  return <>{renderCities()} </>

  function renderCities() {
    const allCities = places.map(place => place.city)
    const cities = allCities.filter(
      (city, index) => allCities.indexOf(city) === index
    )
    return cities
      .sort((a, b) => a.localeCompare(b))
      .map((city, index) => (
        <City
          key={index}
          places={places.filter(place => place.city === city)}
          city={city}
        />
      ))
  }
}
