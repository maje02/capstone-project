import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Place({
  name,
  street,
  number,
  zip_code,
  city,
  categories,
}) {
  return (
    <PlaceBody>
      <PlaceName>{name}</PlaceName>
      <PlaceAddress>
        {street} {number}
      </PlaceAddress>
      <PlaceAddress>
        {zip_code} {city}
      </PlaceAddress>
      <PlaceCategories>{renderCategories(categories)}</PlaceCategories>
    </PlaceBody>
  )

  function renderCategories(categories, index) {
    return categories.map(category => (
      <PlaceCategory key={index}>{category}</PlaceCategory>
    ))
  }
}
const PlaceBody = styled.section`
  position: relative;
  padding: 10px;
  margin: 20px;
  background: #f7f7f7;
  box-shadow: 0 10px 10px #0002;
`
const PlaceName = styled.p`
  color: #637f68;
  text-align: left;
  text-transform: uppercase;
  margin: 0 0 5px 0;
  font-weight: bold;
`

const PlaceAddress = styled.p`
  font-family: 'Noto Serif JP';
  font-size: 0.9rem;
  color: #6c6c63;
  text-align: left;
  margin: 0;
`
const PlaceCategories = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  margin-top: 5px;
`
const PlaceCategory = styled.p`
  font-size: 0.7rem;
  color: #b77373;
  text-transform: uppercase;
  margin: 2px 4px;
  font-weight: bolder;
`

Place.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}
