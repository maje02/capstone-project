import React from 'react'
import styled from 'styled-components/macro'
//import PropTypes from 'prop-types'

export default function FilterCategory(
  { category, selectCategory, checked },
  index
) {
  return (
    <FilterCategoryStyled key={index}>
      <FilterCheckbox
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
const FilterCheckbox = styled.input`
  /* height: 12px;
  width: 12px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid #6c6c63;
  border-radius: 0;
  outline: none;
  background-color: hotpink;
   ${props => (props.checked ? '#b77373' : 'white')}; 
  cursor: pointer;

    "&::before": {
    content: '\2713';
    display: block;
    text-align: center;
    color: #41b883;
    position: absolute;
    left: 0.7rem;
    top: 0.2rem;
  } */ 
`
