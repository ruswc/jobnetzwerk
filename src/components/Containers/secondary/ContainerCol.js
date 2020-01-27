import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const ContainerCol = ({ className, children }) => {
  const classes = classNames('col-12 col-sm-6 d-flex align-items-center', {
    [className]: className
  })

  return <div className={classes}>{children}</div>
}

ContainerCol.defaultProps = {
  className: '',
  children: null
}

ContainerCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default ContainerCol
