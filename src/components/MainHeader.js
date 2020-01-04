import React from "react"
import UserInfo from "./UserInfo"
import LeftSideBlock from "./LeftSideBlock"

const MainHeader = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-2">
        <div className="left-side-container">
          <LeftSideBlock />
        </div>
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10 main-header-right-col">
        <UserInfo />
      </div>
    </div>
  </div>
)

export default MainHeader
