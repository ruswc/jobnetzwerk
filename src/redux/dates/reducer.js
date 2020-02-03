import { DECREASE_EVENT, INCREASE_EVENT } from './types'

const initialState = {
  numOfEvents: 0
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_EVENT:
      return {
        ...state,
        numOfEvents: state.numOfEvents + 1
      }
    case DECREASE_EVENT:
      return {
        ...state,
        numOfEvents: state.numOfEvents - 1
      }

    default:
      return state
  }
}

export default eventReducer
