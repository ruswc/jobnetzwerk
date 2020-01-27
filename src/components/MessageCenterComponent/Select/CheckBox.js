import React from 'react'
import { ReactComponent as Triangle } from 'img/vector/arrows/triangle.svg'
import SelectContainer from './SelectContainer'

const CheckBox = () => (
  <SelectContainer className="selected">
    <input type="checkbox" />
    <Triangle style={{ fill: '#666666', width: '10px' }} className="ml-1" />
  </SelectContainer>
)

export default CheckBox
