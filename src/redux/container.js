import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import clickOnButton from './actions'

const Cont = props => {
  const { addNewMessageToCounter, numOfMessage } = props
  return (
    <>
      <h1>Hi</h1>
      <button type="button" onClick={addNewMessageToCounter}>
        click
      </button>
      <h4>Number of messages - {numOfMessage}</h4>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numOfMessage: state.numOfMessa.numOfMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewMessageToCounter: () => dispatch(clickOnButton())
  }
}

Cont.defaultProps = {
  numOfMessage: '',
  addNewMessageToCounter: () => {}
}

Cont.propTypes = {
  numOfMessage: PropTypes.number,
  addNewMessageToCounter: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Cont)
