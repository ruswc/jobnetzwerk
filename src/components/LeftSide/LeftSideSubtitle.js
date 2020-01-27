import React from 'react'
import PropTypes from 'prop-types'

const LeftSideSubtitle = ({ text, children }) => (
  <h6 className="left-side-subtitle text-center">
    {text}
    <br />
    {children}
  </h6>
)

LeftSideSubtitle.defaultProps = {
  text: '',
  children: null
}

LeftSideSubtitle.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node
}

export default LeftSideSubtitle
