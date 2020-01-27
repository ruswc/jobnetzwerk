import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const SelectContainer = ({ className, children }) => {
  const classes = classNames('select-container d-flex align-items-center', {
    [className]: className
  })

  return <div className={classes}>{children}</div>
}

SelectContainer.defaultProps = {
  className: '',
  children: null
}

SelectContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default SelectContainer
