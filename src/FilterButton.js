import React from 'react'
import styled from 'styled-components/macro'
import filter from './img/filter.svg'

export default function FilterButton() {
  return (
    <FilterButtonStyled>
      <img src={filter} alt="filter" />
      Filter
    </FilterButtonStyled>
  )
}

const FilterButtonStyled = styled.div`
  display: flex;
  margin: 0 0 0 20px;
  padding: 0 4px 0 0;
  font-family: 'Noto Serif JP';
  color: #6c6c63;
`
