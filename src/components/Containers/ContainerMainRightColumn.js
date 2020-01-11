import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

const ContainerMainRightColumn = ({ children, className }) => {
  const classes = classNames(
    "col-9 col-sm-9 col-md-9 col-lg-10 pl-0 pr-2 pr-sm-3 pr-xl-4",
    {
      [className]: className
    }
  )
  return <div className={classes}>{children}</div>
}

ContainerMainRightColumn.defaultProps = {
  children: null,
  className: ""
}

ContainerMainRightColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default ContainerMainRightColumn
