import React from "react"
import PropTypes from "prop-types"

const Hr = ({ className }) => (
  <div>
    <hr className={className} />
  </div>
)

Hr.propTypes = {
  className: PropTypes.string.isRequired
}

export default Hr
