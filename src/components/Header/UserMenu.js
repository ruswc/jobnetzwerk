import React from "react"
import de from "img/vector/flags/de.svg"
import userbody from "img/vector/userbody.svg"

const UserMenu = () => (
  <div className="user-menu-container d-flex flex-row justify-content-center align-items-center">
    <div className="img-item">
      <img src={de} alt="" className="user-menu-icon" />
    </div>
    <div className="img-item">
      <img src={userbody} alt="" className="user-menu-icon" />
    </div>
  </div>
)

export default UserMenu
