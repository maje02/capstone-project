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
  -webkit-appearance: none;
  font-family: 'Noto Serif JP';
  font-size: 1rem;
  display: inline-flex;
  padding: 5px;
  cursor: pointer;
  position: relative;
`
/* const FilterCheckbox = styled.input`
  -webkit-appearance: none;
  height: 10px;
  border: 1px solid 'black';
  color: 'hotpink';
  &:checked + label {
    background: 'pink';
  }
` */
