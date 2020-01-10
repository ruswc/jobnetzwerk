import React from "react"
import de from "img/vector/flags/de.svg"
import userbody from "img/vector/userbody.svg"

const UserMenu = () => (
  <div className="user-menu-container d-flex flex-column flex-sm-row justify-content-center align-items-center">
    <div className="img-item m-0 m-sm-2">
      <img src={de} alt="" className="user-menu-icon" />
    </div>
    <div className="img-item m-0 m-sm-2">
      <img src={userbody} alt="" className="user-menu-icon" />
    </div>
  </div>
)

export default UserMenu
