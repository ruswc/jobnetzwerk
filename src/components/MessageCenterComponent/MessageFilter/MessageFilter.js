import React from 'react'
import Container from '../../Containers/Container'
import MessageFilterItem from './MessageFilterItem'

const MessageFilter = () => {
  return (
    <Container>
      <div className="message-container p-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 px-1 px-sm-3 d-flex justify-content-center">
              <MessageFilterItem text="All Messages" isactive />
            </div>
            <div className="col-4 px-1 px-sm-3 d-flex justify-content-center">
              <MessageFilterItem text="Unread Messages" />
            </div>
            <div className="col-4 px-1 px-sm-3 d-flex justify-content-center">
              <MessageFilterItem text="Read Messages" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MessageFilter
