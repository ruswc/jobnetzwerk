import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Container = ({ children, className }) => {
  const classes = classNames('col-12 px-2 px-sm-3 px-xl-4', {
    [className]: className
  })
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row w-100 m-0">
        <div className={classes}>{children}</div>
      </div>
    </div>
  )
}

Container.defaultProps = {
  children: null,
  className: ''
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Container
