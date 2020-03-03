import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers'
import authMiddleware from '../middlewares/auth'
import refreshTokenMiddleware from '../middlewares/refreshToken'

const persistConfig = {
  key: 'jbntzwrk',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(
      applyMiddleware(thunk, authMiddleware, refreshTokenMiddleware)
    )
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
