import React from "react"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Header = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3">
        <Logo />
      </div>
      <div className="col-7 col-sm-7 col-md-7 col-lg-8 px-2 px-sm-3">
        <div className="header-text">KUNDENLOGO</div>
      </div>
      <div className="col-2 px-2 px-sm-3 d-flex justify-content-center align-items-center">
        <UserMenu />
      </div>
    </div>
  </div>
)

export default Header
