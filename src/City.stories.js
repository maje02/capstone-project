import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
//import { action } from '@storybook/addon-actions'
import City from './City'

export default {
  title: 'City',
  decorators: [withKnobs],
}

export const standard = () => (
  <City
    places={['Place', 'Place']}
    name={text('Name', 'Name of Place')}
    street={text('Street', 'Street of Place')}
    number={number('Number', 'Number of Place')}
    zip_code={number('Zip_code', 'Zip_code of Place')}
    city={text('City', 'City of Place')}
    phone={number('Phone Number', 'Phone number of Place')}
    mail={text('Mail', 'E-Mail to Place')}
    websiteURL={text('Website', 'Website of Place')}
    opening_times={text('Opening Times', 'Opening Times of Place')}
    description={text('Description', 'Description of Place')}
    categories={['Categories', 'Categories of Place']}
  />
)
