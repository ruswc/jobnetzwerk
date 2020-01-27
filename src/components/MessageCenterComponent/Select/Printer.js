import React from 'react'
import { ReactComponent as PrinterIcon } from 'img/vector/icons/printer.svg'
import SelectContainer from './SelectContainer'

const Printer = () => (
  <SelectContainer>
    <PrinterIcon style={{ height: '18px' }} />
    <div className="filter-text ml-2">Drucken</div>
  </SelectContainer>
)

export default Printer
