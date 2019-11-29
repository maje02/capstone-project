import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import PlaceCategories from './PlaceCategories'

export default {
  title: 'PlaceCategories',
  decorators: [withKnobs],
}

export const standard = () => (
  <PlaceCategories categories={['Categories', 'Categories of Place']} />
)
