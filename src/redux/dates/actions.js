import { INCREASE_EVENT, DECREASE_EVENT } from './types'

export const addEvent = data => {
  return {
    type: INCREASE_EVENT,
    data
  }
}

export const deleteEvent = data => {
  return {
    type: DECREASE_EVENT,
    data
  }
}
