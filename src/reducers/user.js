import { handleActions } from 'redux-actions'
import { setUserRequest, setUserSuccess, setUserFailure } from '../actions/user'
import { signOut } from '../actions/auth'

const initialState = {
  isLoading: false,
  isUser: false,
  errors: {},
  user: {}
}

export default handleActions(
  {
    [setUserRequest]: (state, { payload }) => ({
      ...state,
      isLoading: payload
    }),

    [setUserSuccess]: (state, { payload }) => ({
      ...state,
      isUser: true,
      errors: {},
      user: payload
    }),
    [setUserFailure]: (state, { payload }) => ({
      ...state,
      errors: payload
    }),
    [signOut]: () => initialState
  },
  initialState
)
