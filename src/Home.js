import React, { useState } from 'react'
import styled from 'styled-components/macro'
import places from './places.json'
import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import City from './City'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <HomeWrapper>
      <FilterButton handleClick={() => toggleFilterMenu()}></FilterButton>
      {isClicked ? <FilterMenu places={places} /> : ''}
      {renderCities()}
    </HomeWrapper>
  )

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
  function toggleFilterMenu() {
    setIsClicked(!isClicked)
  }
}

const HomeWrapper = styled.div`
  position: relative;
  overflow: scroll;
`
