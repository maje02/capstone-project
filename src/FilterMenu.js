import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function FilterMenu({ categories }, index) {
  return (
    <FilterMenuWrapper>
      <FilterHeadline>Filter</FilterHeadline>
      {renderFilterCategories()}
    </FilterMenuWrapper>
  )
  function renderFilterCategories() {
    return categories
      .sort((a, b) => a.localeCompare(b))
      .map(category => (
        <FilterCategory key={index}>
          {category}
          <input type="checkbox" />
        </FilterCategory>
      ))
  }
}

const FilterMenuWrapper = styled.section`
  position: absolute;
  top: 18px;
  left: 20px;
  z-index: 1;
  display: grid;
  padding: 10px;
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
const FilterCategory = styled.label`
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
`

FilterMenu.propTypes = {
  categories: PropTypes.array.isRequired,
}
