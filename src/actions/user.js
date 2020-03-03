import { createAction } from 'redux-actions'
import services from '../services/user'

import {
  SET_USER_REQUEST,
  SET_USER_SUCCESS,
  SET_USER_FAILURE
} from '../types/user'

export const setUserRequest = createAction(SET_USER_REQUEST)
export const setUserSuccess = createAction(SET_USER_SUCCESS)
export const setUserFailure = createAction(SET_USER_FAILURE)

export const getUserInfo = () => async dispatch => {
  dispatch(setUserRequest(true))
  try {
    const data = await services.getUserInfo()
    dispatch(setUserSuccess(data))
  } catch (e) {
    dispatch(setUserFailure(e.response.data))
  } finally {
    dispatch(setUserRequest(false))
  }
}

export default {
  getUserInfo,
  setUserRequest,
  setUserSuccess,
  setUserFailure
}
