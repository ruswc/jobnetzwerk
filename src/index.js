import React from 'react'
import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { HashRouter } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'
// import createStore from "store"
// import createStore from ''

import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'

import 'bootstrap/dist/css/bootstrap.css'
import './styles/index.scss'
import 'js/index'

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
