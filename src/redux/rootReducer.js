import { combineReducers } from 'redux'
import messageReducer from './reducer'
import eventReducer from './dates/reducer'

const rootReducer = combineReducers({
  numOfMessa: messageReducer,
  nOfEvents: eventReducer
})

export default rootReducer
