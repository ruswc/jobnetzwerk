import React from 'react'
import PropTypes from 'prop-types'
import Container from '../../Containers/Container'

const MessageItem = ({ name, text, data }) => {
  return (
    <Container>
      <div className="message-item mt-1 p-2">
        <div className="container-fluid m-0 p-0">
          <div className="row m-0 p-0 d-flex flex-nowrap">
            <div className="col-auto d-flex align-items-center">
              <input type="checkbox" />
            </div>
            <div className="col-4 col-md-3 col-lg-2 d-flex align-items-center">
              <div className="active-text main name text-nowrap text-truncate">
                {name}
              </div>
            </div>
            <div className="active-text main content text-nowrap text-truncate px-2 align-self-center mr-auto">
              {text}
            </div>
            <div className="col-auto d-flex align-items-center self">
              <div className="container m-0 p-0">
                <div className="row d-flex flex-column align-items-end">
                  <div className="col-auto my-1">{data}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

MessageItem.defaultProps = {
  name: '',
  text: '',
  data: ''
}

MessageItem.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  data: PropTypes.string
}

export default MessageItem
