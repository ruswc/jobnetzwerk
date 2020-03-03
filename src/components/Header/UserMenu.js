import React from 'react'
import de from 'img/vector/flags/de.svg'
import userbody from 'img/vector/userbody.svg'
import Dropdown from '../../containers/DropDown'

const UserMenu = () => {
  const handleDropdownMenu = () => {
    const menu = document.getElementById('user-dropdown-menu')
    if (menu.hidden) menu.hidden = false
    else menu.hidden = true
  }

  return (
    <div className="user-menu-container d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="img-item m-0 m-sm-2">
        <img src={de} alt="" className="user-menu-icon" />
      </div>
      <div className="img-item m-0 m-sm-2 dropdown-container">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <img
          src={userbody}
          alt=""
          className="user-menu-icon"
          onClick={handleDropdownMenu}
          key="userbody"
        />
        <Dropdown />
      </div>
    </div>
  )
}

export default UserMenu
