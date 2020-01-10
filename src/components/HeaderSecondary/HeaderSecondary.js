import React from "react"
import userlogo from "img/vector/userlogo.svg"
import UserLogo from "./UserLogo"
import UserMenu from "./UserMenu"

const HeaderSocondary = () => (
  <div className="nav navbar-secondary">
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3 px-xl-4 d-flex justify-content-center">
          <UserLogo img={userlogo} />
        </div>
        <div className="col-7 col-sm-7 col-md-7 col-lg-8 px-2 px-sm-3 px-xl-4">
          <div className="secondary-header-text">
            <h5 className="text-white">Herzlich Willcommen, Derya Bulut!</h5>
          </div>
        </div>
        <div className="col-2 px-2 px-sm-3 px-xl-4">
          <UserMenu />
        </div>
      </div>
    </div>
  </div>
)

export default HeaderSocondary
