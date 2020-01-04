import React from "react"
import PropTypes from "prop-types"

const ServiceContainer = ({ logo, text }) => (
  <div className="row my-2">
    <div className="col-12 col-md-3 px-0 py-1 py-md-0  px-md-3">{logo}</div>
    <div className="col-12 col-md-9 p-4 service-body">{text}</div>
  </div>
)

ServiceContainer.defaultProps = {
  logo: null,
  text: null
}

ServiceContainer.propTypes = {
  logo: PropTypes.shape({}),
  text: PropTypes.shape({})
}

export default ServiceContainer
