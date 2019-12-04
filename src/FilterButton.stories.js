import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import filter from './img/filter.svg'
import FilterButton from './FilterButton'

export default {
  title: 'FilterButton',
  decotators: [withKnobs],
}

export const standard = () => <FilterButton src={filter} alt={text('filter')} />
