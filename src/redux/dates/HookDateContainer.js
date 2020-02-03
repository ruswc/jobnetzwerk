import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addEvent, deleteEvent } from './actions'

const HookDateContainer = () => {
  const nuOfEv = useSelector(state => state.nOfEvents.numOfEvents)
  const dispatch = useDispatch()
  return (
    <div className="card" style={{ width: 'fit-content' }}>
      <div className="card-title d-flex justify-content-center">
        <h2>Number Of Events</h2>
      </div>
      <div className="card-body">
        <h1 className="d-flex justify-content-center align-items-center">
          {nuOfEv}
        </h1>
      </div>
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => dispatch(addEvent())}
        >
          add event
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => dispatch(deleteEvent())}
          disabled={nuOfEv <= 0}
        >
          delete event
        </button>
      </div>
    </div>
  )
}

export default HookDateContainer
