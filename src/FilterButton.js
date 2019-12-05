import React from 'react'
import styled from 'styled-components/macro'
import filter from './img/filter.svg'

export default function FilterButton({ handleClick }) {
  return (
    <FilterButtonStyled onClick={handleClick}>
      <FilterIcon src={filter} alt="filter" />
      Filter
    </FilterButtonStyled>
  )
}

const FilterButtonStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 20px;
  padding: 0 4px 0 0;
  font-family: 'Noto Serif JP';
  color: #6c6c63;
  font-size: 0.8rem;
`

const FilterIcon = styled.img`
  padding: 0 4px 0 0;
  height: 12px;
`
