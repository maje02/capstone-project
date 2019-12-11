import React, { useState } from 'react'
import styled from 'styled-components/macro'

import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import City from './City'
import Searchbar from './Searchbar.js'

export default function Home({ places }) {
  const [isClicked, setIsClicked] = useState(false)
  const [input, setInput] = useState('')
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
      <Searchbar
        onInput={event => setInput(event.target.value)}
        onSubmit={event => event.preventDefault()}
      />
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
            )
            .filter(item => {
              const name = item.name.toLowerCase()
              const street = item.street.toLowerCase()
              const zip_code = item.zip_code.toLowerCase()
              const city = item.city.toLowerCase()
              const description = item.description.toLowerCase()
              const categories = item.categories.join().toLowerCase()
              const query = input.toLowerCase()
              return (
                query === '' ||
                name.includes(query) ||
                street.includes(query) ||
                zip_code.includes(query) ||
                city.includes(query) ||
                description.includes(query) ||
                categories.includes(query)
              )
            })}
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
