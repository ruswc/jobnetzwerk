import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ContainerMainRightLastColumn = ({ children, className }) => {
  const classes = classNames('col-2 px-2 px-sm-3 px-xl-4', {
    [className]: className
  })
  return <div className={classes}>{children}</div>
}

ContainerMainRightLastColumn.defaultProps = {
  children: null,
  className: ''
}

ContainerMainRightLastColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ContainerMainRightLastColumn
