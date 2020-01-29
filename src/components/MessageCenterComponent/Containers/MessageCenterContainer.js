import React from 'react'
import PropTypes from 'prop-types'
import SearchInput from 'components/MessageCenterComponent/Search/SearchInput'
import Filter from 'components/MessageCenterComponent/Search/Filter'
import ContainerRow from 'components/Containers/secondary/ContainerRow'
import ContainerCol from 'components/Containers/secondary/ContainerCol'

const MessageCenterContainer = ({ children }) => {
  // console.log(children)
  return (
    <>
      <ContainerRow>
        <ContainerCol>
          <SearchInput />
        </ContainerCol>
        <ContainerCol>
          <Filter />
        </ContainerCol>
      </ContainerRow>
      {children}
    </>
  )
}

MessageCenterContainer.defaultProps = {
  children: null
}

MessageCenterContainer.propTypes = {
  children: PropTypes.node
}

export default MessageCenterContainer
