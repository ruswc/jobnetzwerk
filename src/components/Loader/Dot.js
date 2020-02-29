import React from 'react'
import PropTypes from 'prop-types'

const Dot = ({ delay }) => {
  return (
    <div
      className="spinner-grow"
      style={{
        color: '#f5b41b',
        animationDelay: delay,
        width: '1rem',
        height: '1rem'
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}

Dot.defaultProps = {
  delay: '0s'
}

Dot.propTypes = {
  delay: PropTypes.string
}

export default Dot
