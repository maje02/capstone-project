import React, { useState } from 'react'
import styled from 'styled-components/macro'
import places from './places.json'
import FilterButton from './FilterButton'
import FilterMenu from './FilterMenu'
import City from './City'

export default function Home() {
  // eslint-disable-next-line no-restricted-globals

  const [isClicked, setIsClicked] = useState(false)
  const [categories, setCategories] = useState([
    { name: 'Bücher', checked: false },
    { name: 'Elektronik', checked: false },
    { name: 'Kleidung', checked: false },
  ])
  const checkedCategories = categories.map(item =>
    item.checked ? item.name : ''
  )
  console.log(checkedCategories)

  //   const [isSelected, setIsSelected] = useState(false)
  return (
    <HomeWrapper>
      <FilterButton handleClick={() => toggleFilterMenu()}></FilterButton>
      {isClicked ? (
        <FilterMenu
          places={places}
          selectCategory={selectCategory}
          //category={isSelected}
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
          places={places.filter(place => place.city === city)}
          city={city}
        >
          {console.log(
            places
              .filter(place => place.city === city)
              .filter(places =>
                places.categories.some(arrayEl =>
                  checkedCategories.some(item => item === arrayEl)
                )
              )
          )}
        </City>
      ))
  }
  function toggleFilterMenu() {
    setIsClicked(!isClicked)
  }

  function selectCategory(category) {
    const index = categories.findIndex(element => element.name === category)
    console.log(index)

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
