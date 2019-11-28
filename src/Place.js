import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Place({
  name,
  street,
  number,
  zip_code,
  city,
  phone,
  mail,
  websiteURL,
  opening_times,
  description,
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
      <ContactDetails>
        <Contact href={'tel:' + phone}>{phone}</Contact>
        <Contact href={'mailto:' + mail}>Mail</Contact>
        <Contact href={websiteURL} target="_blank">
          Website
        </Contact>
      </ContactDetails>
      <Times>
        Öffnungszeiten: <br></br>
        {opening_times}
      </Times>
      <PlaceText>{description}</PlaceText>
      <PlaceCategories>{renderCategories(categories)}</PlaceCategories>
    </PlaceBody>
  )

  function renderCategories(categories, index) {
    return categories
      .sort((a, b) => a.localeCompare(b))
      .map(category => <PlaceCategory key={index}>{category}</PlaceCategory>)
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
const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  font-family: 'Noto Serif JP';
`
const Contact = styled.a`
  text-decoration: inherit;
  font-size: 0.9rem;
  color: #637f68;
  font-family: 'Noto Serif JP';
`
const Times = styled.p`
  text-align: right;
  font-size: 0.8rem;
  color: #b77373;
  text-transform: uppercase;
  font-weight: bolder;
  padding: 0;
  margin: 0;
`
const PlaceText = styled.p`
  font-family: 'Noto Serif JP';
  font-size: 0.9rem;
  color: #6c6c63;
  text-align: left;
  margin: 5px 0;
`

const PlaceCategories = styled.div`
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

Place.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}
