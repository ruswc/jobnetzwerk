import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ContainerMainLeftColumn = ({ children, className }) => {
  const classes = classNames('col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3', {
    [className]: className
  })
  return <div className={classes}>{children}</div>
}

ContainerMainLeftColumn.defaultProps = {
  children: null,
  className: ''
}

ContainerMainLeftColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ContainerMainLeftColumn
