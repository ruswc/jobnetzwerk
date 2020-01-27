import React from 'react'
// import { ReactComponent as LetterOpened } from 'img/vector/icons/letteropened.svg'
import { ReactComponent as LetterClosed } from 'img/vector/icons/letterclosed.svg'
import SelectContainer from './SelectContainer'

const Letter = () => (
  <SelectContainer>
    <LetterClosed style={{ height: '18px' }} />
    <div className="filter-text ml-2">Als gelesen markieren</div>
  </SelectContainer>
)

export default Letter
