import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import FilterMenu from './FilterMenu'

export default {
  title: 'FilterMenu',
  decorators: [withKnobs],
}

export const standard = () => <FilterMenu />
