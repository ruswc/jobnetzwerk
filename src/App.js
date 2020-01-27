import React from 'react'
import { Switch, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Switch>
        <First path="/" />
        <MessageCenter path="/messagecenter" exact />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default App
