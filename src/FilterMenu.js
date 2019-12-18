import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import FilterCategory from './FilterCategory'

export default function FilterMenu({ places, selectCategory, checked }) {
  return (
    <FilterMenuWrapper>
      <FilterHeadline>Filter</FilterHeadline>
      {renderFilterCategories(places)}
    </FilterMenuWrapper>
  )
  function renderFilterCategories(places) {
    const allCategories = places.map(places => places.categories).flat()
    const categories = allCategories.filter(
      (categories, index) => allCategories.indexOf(categories) === index
    )
    return categories
      .sort((a, b) => a.localeCompare(b))
      .map((category, index) => (
        <FilterCategory
          key={index}
          selectCategory={selectCategory}
          category={category}
          checked={checked}
        ></FilterCategory>
      ))
  }
}

const FilterMenuWrapper = styled.section`
  position: absolute;
  top: 78px;
  margin: 0px 20px;
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-items: start;
  width: 332px;
  padding: 20px;
  background: #e8e8e8;
  color: #6c6c63;
  font-family: 'Julius Sans One';
  border: 1px solid #6c6c63;
`
const FilterHeadline = styled.p`
  text-align: left;
  font-size: 0.9rem;
  margin: 0 0 8px 0;
`

FilterMenu.propTypes = {
  places: PropTypes.array.isRequired,
}
