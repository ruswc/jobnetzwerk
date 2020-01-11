import React from "react"
import userlogo from "img/vector/userlogo.svg"
import UserLogo from "./UserLogo"
import UserMenu from "./UserMenu"
import ContainerMainLeftColumn from "../Containers/ContainerMainLeftColumn"
import ContainerMainMiddleColumn from "../Containers/ContainerMainMiddleColumn"
import ContainerMainRightLastColumn from "../Containers/ContainerMainRightLastColumn"

const HeaderSocondary = () => (
  <div className="nav navbar-secondary">
    <div className="container-fluid">
      <div className="row">
        <ContainerMainLeftColumn className="px-xl-4 d-flex justify-content-center">
          <UserLogo img={userlogo} />
        </ContainerMainLeftColumn>
        <ContainerMainMiddleColumn>
          <div className="secondary-header-text">
            <h5 className="text-white">Herzlich Willcommen, Derya Bulut!</h5>
          </div>
        </ContainerMainMiddleColumn>
        <ContainerMainRightLastColumn>
          <UserMenu />
        </ContainerMainRightLastColumn>
      </div>
    </div>
  </div>
)

export default HeaderSocondary
