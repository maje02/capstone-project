import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import Place from './Place'

export default {
  title: 'Place',
  decorators: [withKnobs],
}

export const standard = () => (
  <Place
    name={text('Name', 'Name of Place')}
    street={text('Street', 'Street of Place')}
    number={number('Number', 'Number of Place')}
    zip_code={number('Zip_code', 'Zip_code of Place')}
    city={text('City', 'City of Place')}
    categories={['Categories', 'Categories of Place']}
  />
)
