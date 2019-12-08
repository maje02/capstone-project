import React, { useState } from 'react'
import styled from 'styled-components/macro'
import places from './places.json'
import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import City from './City'

export default function Home() {
  const [isClicked, setIsClicked] = useState(false)
  const [categories, setCategories] = useState([
    { name: 'Bücher', checked: true },
    { name: 'Elektronik', checked: true },
    { name: 'Kleidung', checked: true },
    { name: 'Möbel', checked: true },
    { name: 'Haushaltsgegenstände', checked: true },
    { name: 'Spielzeug', checked: true },
    { name: 'Schlafsäcke', checked: true },
  ])
  const checkedCategories = categories.map(item =>
    item.checked ? item.name : ''
  )

  return (
    <HomeWrapper>
      <FilterButton handleClick={() => toggleFilterMenu()}></FilterButton>
      {isClicked ? (
        <FilterMenu
          places={places}
          selectCategory={selectCategory}
          checked={getChecked}
        />
      ) : (
        ''
      )}
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
          places={places
            .filter(place => place.city === city)
            .filter(singleCity =>
              singleCity.categories.some(arrayEl =>
                checkedCategories.some(item => item === arrayEl)
              )
            )}
          city={city}
        ></City>
      ))
  }
  function toggleFilterMenu() {
    setIsClicked(!isClicked)
  }

  function getChecked(category) {
    const index = categories.findIndex(element => element.name === category)
    return categories[index].checked
  }

  function selectCategory(category) {
    const index = categories.findIndex(element => element.name === category)

    setCategories([
      ...categories.slice(0, index),
      {
        ...categories[index],
        checked: !categories[index].checked,
      },
      ...categories.slice(index + 1),
    ])
  }
}

const HomeWrapper = styled.div`
  position: relative;
  overflow: scroll;
`
