import React from 'react'
import PropTypes from 'prop-types'
import MessageCenterContainer from 'components/MessageCenterComponent/Containers/MessageCenterContainer'
import MessageList from './MessageList'
import ReadTheMessage from './ReadTheMessage'

const MessageCenterComponent = ({ list, read, answer }) => {
  return (
    <MessageCenterContainer>
      {list && <MessageList />}
      {read && <ReadTheMessage />}
      {answer && <p>answer</p>}
    </MessageCenterContainer>
  )
}

MessageCenterComponent.defaultProps = {
  list: false,
  read: false,
  answer: false
}

MessageCenterComponent.propTypes = {
  list: PropTypes.bool,
  read: PropTypes.bool,
  answer: PropTypes.bool
}

export default MessageCenterComponent
