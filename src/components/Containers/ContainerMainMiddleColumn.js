import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const ContainerMainMiddleColumn = ({ children, className }) => {
  const classes = classNames(
    'col-7 col-sm-7 col-md-7 col-lg-8 px-2 px-sm-3 px-xl-4',
    {
      [className]: className
    }
  )
  return <div className={classes}>{children}</div>
}

ContainerMainMiddleColumn.defaultProps = {
  children: null,
  className: ''
}

ContainerMainMiddleColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ContainerMainMiddleColumn
