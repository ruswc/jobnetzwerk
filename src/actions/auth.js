import { createAction } from 'redux-actions'
import services from '../services/auth'
import storage from '../helpers/storage'
import client from '../helpers/api'

import {
  AUTH_TOKEN_KEY,
  SET_AUTH_REQUEST,
  SET_AUTH_SUCCESS,
  SET_AUTH_FAILURE,
  SIGN_OUT,
  SET_AUTH_REFRESH_TOKEN
} from '../types/auth'
import { getUserInfo } from './user'

export const setAuthRequest = createAction(SET_AUTH_REQUEST)
export const setAuthSuccess = createAction(SET_AUTH_SUCCESS)
export const setAuthFailure = createAction(SET_AUTH_FAILURE)
export const setAuthRefresh = createAction(SET_AUTH_REFRESH_TOKEN)

export const signIn = value => async dispatch => {
  dispatch(setAuthRequest(true))
  try {
    const {
      data: {
        access_token: accessTokenValue,
        refresh_token: refreshTokenValue,
        expires_in: expiresInValue
      }
    } = await services.signIn(value)

    if (accessTokenValue) {
      storage.setItem(AUTH_TOKEN_KEY, accessTokenValue)
      client.setAuthHeader(accessTokenValue)
    }

    dispatch(
      setAuthSuccess({ accessTokenValue, refreshTokenValue, expiresInValue })
    )
    dispatch(getUserInfo())
  } catch (errors) {
    const { response: { data } = {} } = errors
    dispatch(setAuthFailure(data))
  } finally {
    dispatch(setAuthRequest(false))
  }
}

export const signOut = createAction(SIGN_OUT)

export default {
  signIn,
  signOut,
  setAuthRequest,
  setAuthSuccess,
  setAuthFailure,
  setAuthRefresh
}
