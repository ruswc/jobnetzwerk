import React from 'react'
import PropTypes from 'prop-types'

const ContainerFlexCenter = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col d-flex justify-content-center">{children}</div>
    </div>
  </div>
)

ContainerFlexCenter.defaultProps = {
  children: null
}

ContainerFlexCenter.propTypes = {
  children: PropTypes.node
}

export default ContainerFlexCenter
