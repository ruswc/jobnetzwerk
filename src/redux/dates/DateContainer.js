import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addEvent, deleteEvent } from './actions'

const DateContainer = props => {
  const { numberOfEvents, addNewEvent, deleEvent } = props
  return (
    <>
      <div className="card" style={{ width: 'fit-content' }}>
        <div className="card-title">Number of events</div>
        <div className="card-body d-flex justify-content-center align-items-center">
          <h1>{numberOfEvents}</h1>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={addNewEvent}
          >
            add event
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={deleEvent}
            disabled={numberOfEvents <= 0}
          >
            delete event
          </button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    numberOfEvents: state.nOfEvents.numOfEvents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewEvent: () => dispatch(addEvent()),
    deleEvent: () => dispatch(deleteEvent())
  }
}

DateContainer.defaultProps = {
  numberOfEvents: '',
  addNewEvent: () => {},
  deleEvent: () => {}
}

DateContainer.propTypes = {
  numberOfEvents: PropTypes.number,
  addNewEvent: PropTypes.func,
  deleEvent: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(DateContainer)
