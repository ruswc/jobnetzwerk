import React from 'react'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import Container from '../Container'

const ContainerRow = ({
  firstContainerClass,
  secondContainerClass,
  rowClass,
  children
}) => {
  const firstClasses = classNames('d-flex align-items-center flex-row', {
    [firstContainerClass]: firstContainerClass
  })
  const secondClasses = classNames('container-fluid mt-4', {
    [secondContainerClass]: secondContainerClass
  })
  const rowClasses = classNames('row', {
    [rowClass]: rowClass
  })

  return (
    <Container className={firstClasses}>
      <div className={secondClasses}>
        <div className={rowClasses}>{children}</div>
      </div>
    </Container>
  )
}

ContainerRow.defaultProps = {
  firstContainerClass: '',
  secondContainerClass: '',
  rowClass: '',
  children: null
}

ContainerRow.propTypes = {
  firstContainerClass: PropTypes.string,
  secondContainerClass: PropTypes.string,
  rowClass: PropTypes.string,
  children: PropTypes.node
}

export default ContainerRow
