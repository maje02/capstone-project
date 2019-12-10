import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import PlaceCategories from './PlaceCategories'
import arrowDown from './img/arrow-down.svg'
import arrowUp from './img/arrow-up.svg'

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
  const [isHidden, setIsHidden] = useState(true)

  return (
    <PlaceBody>
      <PlaceName>{name}</PlaceName>
      <PlaceAddress>
        {street} {number}
      </PlaceAddress>
      <PlaceAddress>
        {zip_code} {city}
      </PlaceAddress>
      {!isHidden && (
        <DetailsWrapper>
          <ContactDetails>
            <Contact href={'tel:' + phone}>{phone}</Contact>

            <Contact href={'mailto:' + mail}>{mail ? 'Mail' : ''} </Contact>
            <Contact href={websiteURL} target="_blank">
              {websiteURL ? 'Website' : ''}
            </Contact>
          </ContactDetails>
          <Times>
            Öffnungszeiten:
            <br />
            {opening_times}
          </Times>
          <PlaceText>{description}</PlaceText>
        </DetailsWrapper>
      )}
      <PlaceCategories categories={categories}></PlaceCategories>
      <img
        src={isHidden ? arrowDown : arrowUp}
        onClick={toggleIsHidden}
        alt="arrow"
      />
    </PlaceBody>
  )
  function toggleIsHidden() {
    setIsHidden(!isHidden)
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
const DetailsWrapper = styled.div`
  display: grid;
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
  text-align: justify;
  hyphens: auto;
  margin: 8px 0;
`

Place.propTypes = {
  name: PropTypes.string.isRequired,
  street: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  zip_code: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
}
