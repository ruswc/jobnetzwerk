import React from "react"
import UserInfo from "./UserInfo"
import LeftSideBlock from "../LeftSide/LeftSideBlock"

const MainContentHeader = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3">
        <div className="left-side-container">
          <LeftSideBlock />
        </div>
      </div>
      <div className="col-9 col-sm-9 col-md-9 col-lg-10 px-2 px-sm-3 main-header-right-col">
        <UserInfo />
      </div>
    </div>
  </div>
)

export default MainContentHeader
