import React from "react"
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Header = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-2">
        <Logo />
      </div>
      <div className="col-6 col-sm-6 col-md-7 col-lg-8">
        <div className="header-text">KUNDENLOGO</div>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <UserMenu />
      </div>
    </div>
  </div>
)

export default Header
