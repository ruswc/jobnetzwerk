import { createAction } from 'redux-actions'
import services from '../services/refreshToken'

import {
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE
} from '../types/refreshToken'
import storage from '../helpers/storage'
import { AUTH_TOKEN_KEY } from '../types/auth'
import client from '../helpers/api'

export const refreshTokenRequest = createAction(REFRESH_TOKEN_REQUEST)
export const refreshTokenSuccess = createAction(REFRESH_TOKEN_SUCCESS)
export const refreshTokenFailure = createAction(REFRESH_TOKEN_FAILURE)

export const refreshToken = token => async dispatch => {
  dispatch(refreshTokenRequest(true))
  try {
    const {
      data: {
        access_token: accessTokenValue,
        refresh_token: refreshTokenValue,
        expires_in: expiresInValue
      }
    } = await services.refreshToken(JSON.stringify({ token }))

    if (accessTokenValue) {
      storage.setItem(AUTH_TOKEN_KEY, accessTokenValue)
      client.setAuthHeader(accessTokenValue)
    }

    dispatch(
      refreshTokenSuccess({
        accessTokenValue,
        refreshTokenValue,
        expiresInValue
      })
    )
  } catch (e) {
    const { response: { data } = {} } = e
    dispatch(refreshTokenFailure(data))
  } finally {
    dispatch(refreshTokenRequest(false))
  }
}

export default {
  refreshToken,
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure
}
