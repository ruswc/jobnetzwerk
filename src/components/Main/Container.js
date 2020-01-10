import React from "react"
import PropTypes from "prop-types"

const Container = ({ children }) => (
  <div className="container-fluid m-0 p-0">
    <div className="row w-100 m-0">
      <div className="col-12 px-2 px-sm-3 px-xl-4">{children}</div>
    </div>
  </div>
)

Container.defaultProps = {
  children: null
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
