import React from 'react'
import { Switch, Route } from 'react-router-dom'

import First from './pages/First'
import Error from './pages/Error'
import MessageCenter from './pages/MessageCenter'

function App() {
  return (
    <>
      <Switch>
        <First path="/" exact />
        <MessageCenter path="/messagecenter" exact />
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </>
  )
}

export default App
