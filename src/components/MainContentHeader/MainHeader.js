import React from "react"
import UserInfo from "./UserInfo"
import LeftSideBlock from "../LeftSide/LeftSideBlock"
import Container from "../Main/Container"

const MainContentHeader = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3 px-xl-4 d-flex justify-content-center">
        <div className="left-side-container w-100">
          <LeftSideBlock />
        </div>
      </div>
      <div className="col-9 col-sm-9 col-md-9 col-lg-10 px-2 px-sm-3 px-xl-4 main-header-right-col">
        <Container>
          <UserInfo />
        </Container>
      </div>
    </div>
  </div>
)

export default MainContentHeader
