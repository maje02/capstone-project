import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import City from './City'

export default {
  title: 'City',
  decorators: [withKnobs],
}

export const standard = () => (
  <City
    renderPlaces={action('renderPlaces')}
    city={text('City', 'City Section')}
    places={['Places', 'Places in City']}
  />
)
