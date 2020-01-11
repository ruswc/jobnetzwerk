import React from "react"
import UserInfo from "./UserInfo"
import LeftSideBlock from "../LeftSide/LeftSideBlock"
import Container from "../Containers/Container"
import ContainerMainRightColumn from "../Containers/ContainerMainRightColumn"
import ContainerMainLeftColumn from "../Containers/ContainerMainLeftColumn"

const MainContentHeader = () => (
  <div className="container-fluid">
    <div className="row">
      <ContainerMainLeftColumn className="px-xl-4 d-flex justify-content-center">
        <div className="left-side-container w-100">
          <LeftSideBlock />
        </div>
      </ContainerMainLeftColumn>
      <ContainerMainRightColumn className="main-header-right-col">
        <Container>
          <UserInfo />
        </Container>
      </ContainerMainRightColumn>
    </div>
  </div>
)

export default MainContentHeader
