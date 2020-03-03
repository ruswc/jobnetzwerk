import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import createStore from './store'

import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'
import 'js/index'

export const { store, persistor } = createStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter basename="/jobnetzwerk/#">
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
