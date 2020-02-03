import CLICK from './types'

const initialState = {
  numOfMessage: 0
}

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        numOfMessage: state.numOfMessage + 1
      }
    default:
      return state
  }
}

export default messageReducer
