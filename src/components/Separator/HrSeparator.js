import React from "react"
import PropTypes from "prop-types"

const HrSeparator = ({ className }) => (
  <div>
    <hr className={className} />
  </div>
)

HrSeparator.propTypes = {
  className: PropTypes.string.isRequired
}

export default HrSeparator
