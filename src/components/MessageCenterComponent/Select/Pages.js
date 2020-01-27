import React from 'react'
import { ReactComponent as Arrow } from 'img/vector/arrows/arrow.svg'
import SelectContainer from './SelectContainer'

const Pages = () => (
  <SelectContainer>
    <div className="active-text main mx-2">1-10 von 134</div>
    <Arrow className="arrow-left ml-2" />
    <Arrow className="arrow-right ml-2" />
  </SelectContainer>
)

export default Pages
