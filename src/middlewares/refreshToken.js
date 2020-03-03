// refresh the token during any action
import { refreshToken } from '../actions/refreshToken'
import { refreshTokenSelector } from '../selectors/refreshToken'
import { store } from '../index'

const refreshTokenMiddleware = () => next => action => {
  if (action.type.indexOf('SET_') !== -1) {
    store.dispatch(refreshToken(refreshTokenSelector(store.getState())))
  }
  next(action)
}

export default refreshTokenMiddleware

// TODO: add check expiration time && add verification of a more simple test of action
