import React from 'react'
import { ReactComponent as GarbageBin } from 'img/vector/icons/trash.svg'
import SelectContainer from './SelectContainer'

const Trash = () => (
  <SelectContainer>
    <GarbageBin style={{ height: '18px' }} />
    <div className="filter-text ml-2">Löschen</div>
  </SelectContainer>
)

export default Trash
