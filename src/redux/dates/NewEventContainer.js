import React, { useState } from 'react'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addEvent, deleteEvent } from './actions'

const NewEventContainer = props => {
  const { numOfEvents, addEv, delEv } = props
  const [num, setNum] = useState(1)
  return (
    <div className="card" style={{ width: 'fit-content' }}>
      <div className="card-title">
        <h4 className="d-flex justify-content-center align-items-center">
          Number of events
        </h4>
      </div>
      <div className="card-body">
        <h1 className="d-flex justify-content-center align-items-center">
          {numOfEvents}
        </h1>
        <input
          type="text"
          className=""
          placeholder={num}
          value={num}
          onChange={event => setNum(event.target.value)}
        />
        <button type="button" className="btn btn-info mx-1">
          add
        </button>
      </div>
      <div className="card-footer d-flex justify-content-center align-items-center">
        <button type="button" onClick={addEv}>
          add event
        </button>
        <button type="button" onClick={delEv} disabled={numOfEvents <= 0}>
          delete event
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfEvents: state.nOfEvents.numOfEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addEv: () => dispatch(addEvent()),
    delEv: () => dispatch(deleteEvent())
  }
}

NewEventContainer.defaultProps = {
  numOfEvents: '',
  addEv: () => {},
  delEv: () => {}
}

NewEventContainer.propTypes = {
  numOfEvents: PropTypes.number,
  addEv: PropTypes.func,
  delEv: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NewEventContainer)
