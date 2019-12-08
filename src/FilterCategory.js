import React from 'react'
import styled from 'styled-components/macro'
//import PropTypes from 'prop-types'

export default function FilterCategory(
  { category, selectCategory, checked },
  index
) {
  return (
    <FilterCategoryStyled key={index}>
      <input
        type="checkbox"
        onChange={() => selectCategory(category)}
        checked={checked(category)}
      />
      {category}
    </FilterCategoryStyled>
  )
}

const FilterCategoryStyled = styled.label`
  font-family: 'Noto Serif JP';
  font-size: 0.8rem;
  display: inline-flex;
  cursor: pointer;
  position: relative;
`
