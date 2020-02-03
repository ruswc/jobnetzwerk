import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import clickOnButton from './actions'

function HookContainer() {
  const numofMes1111111111 = useSelector(state => state.numOfMessa.numOfMessage)
  const dispatch = useDispatch()

  return (
    <>
      <h1># of messages - {numofMes1111111111}</h1>
      <button type="button" onClick={() => dispatch(clickOnButton())}>
        Add message
      </button>
    </>
  )
}

export default HookContainer
