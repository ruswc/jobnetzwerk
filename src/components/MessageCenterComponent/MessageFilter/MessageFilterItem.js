import React from 'react'
import PropTypes from 'prop-types'

const MessageFilterItem = ({ text, isactive }) => {
  return (
    <div
      className={
        (isactive && 'message-filter-item active') || 'message-filter-item'
      }
    >
      {text}
    </div>
  )
}

MessageFilterItem.defaultProps = {
  text: '',
  isactive: false
}

MessageFilterItem.propTypes = {
  text: PropTypes.string,
  isactive: PropTypes.bool
}

export default MessageFilterItem
