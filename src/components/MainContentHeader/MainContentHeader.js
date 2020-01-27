import React from 'react'
import PropTypes from 'prop-types'
import LeftSideBlock from '../LeftSide/LeftSideBlock'
import Container from '../Containers/Container'
import ContainerMainRightColumn from '../Containers/ContainerMainRightColumn'
import ContainerMainLeftColumn from '../Containers/ContainerMainLeftColumn'

const MainContentHeader = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <ContainerMainLeftColumn className="px-xl-4 d-flex justify-content-center">
        <div className="left-side-container w-100">
          <LeftSideBlock />
        </div>
      </ContainerMainLeftColumn>
      <ContainerMainRightColumn className="main-header-right-col">
        <Container className="d-flex flex-row justify-content-start flex-shrink-1">
          {children}
        </Container>
      </ContainerMainRightColumn>
    </div>
  </div>
)

MainContentHeader.defaultProps = {
  children: null
}

MainContentHeader.propTypes = {
  children: PropTypes.node
}

export default MainContentHeader
