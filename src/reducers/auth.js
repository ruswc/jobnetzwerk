import { handleActions } from 'redux-actions'
import {
  signOut,
  setAuthRequest,
  setAuthSuccess,
  setAuthFailure,
  setAuthRefresh
} from '../actions/auth'

import {
  refreshTokenRequest,
  refreshTokenSuccess,
  refreshTokenFailure
} from '../actions/refreshToken'

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  errors: {},
  tokens: {}
}

export default handleActions(
  {
    [setAuthRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),
    [setAuthSuccess]: (state, { payload }) => ({
      ...state,
      isAuthenticated: true,
      tokens: payload,
      errors: {}
    }),
    [setAuthRefresh]: (state, { payload }) => ({
      ...state,
      tokens: payload
    }),
    [setAuthFailure]: (state, { payload }) => ({
      ...state,
      errors: payload
    }),
    [refreshTokenRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),

    [refreshTokenSuccess]: (state, { payload }) => ({
      ...state,
      isAuthenticated: true,
      tokens: payload,
      errors: {}
    }),

    [refreshTokenFailure]: (state, { payload }) => ({
      ...state,
      errors: payload
    }),

    [signOut]: () => initialState
  },
  initialState
)
