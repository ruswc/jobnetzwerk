import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Arrowdart } from 'img/vector/arrows/arrowdart.svg'
import SelectContainer from './SelectContainer'

const BackToList = ({ text }) => {
  return (
    <>
      <SelectContainer className="my-2">
        <Arrowdart className="arrowdart" />{' '}
        <div className="back-to-list-text ml-2">{text}</div>
      </SelectContainer>
    </>
  )
}

BackToList.defaultProps = {
  text: ''
}

BackToList.propTypes = {
  text: PropTypes.string
}

export default BackToList
