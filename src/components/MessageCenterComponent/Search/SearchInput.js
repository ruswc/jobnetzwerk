import React from 'react'
import { ReactComponent as Magnifying } from 'img/vector/magnifying.svg'

const SearchInput = () => (
  <form className="w-100">
    <div className="input-group position-relative">
      <input type="text" className="form-control" />
      <Magnifying className="search-icon" />
    </div>
  </form>
)

export default SearchInput
