import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function PlaceCategories({ categories }) {
  return (
    <PlaceCategoriesStyled>
      {renderCategories(categories)}
    </PlaceCategoriesStyled>
  )

  function renderCategories(categories, index) {
    return categories
      .sort((a, b) => a.localeCompare(b))
      .map(category => <PlaceCategory key={index}>{category}</PlaceCategory>)
  }
}

const PlaceCategoriesStyled = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  margin-top: 5px;
`
const PlaceCategory = styled.p`
  font-size: 0.8rem;
  color: #b77373;
  text-transform: uppercase;
  margin: 2px 4px;
  font-weight: bolder;
`
PlaceCategories.propTypes = {
  categories: PropTypes.array.isRequired,
}
