import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import UserMenu from './UserMenu'
import ContainerMainLeftColumn from '../Containers/ContainerMainLeftColumn'
import ContainerMainMiddleColumn from '../Containers/ContainerMainMiddleColumn'
import ContainerMainRightLastColumn from '../Containers/ContainerMainRightLastColumn'

const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <ContainerMainLeftColumn>
          <Link to="/">
            <Logo />
          </Link>
        </ContainerMainLeftColumn>
        <ContainerMainMiddleColumn>
          <div className="header-text">KUNDENLOGO</div>
        </ContainerMainMiddleColumn>
        <ContainerMainRightLastColumn className="d-flex justify-content-center align-items-center">
          <UserMenu />
        </ContainerMainRightLastColumn>
      </div>
    </div>
  )
}

export default Header
