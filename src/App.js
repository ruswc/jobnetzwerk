import React from 'react'
import { Switch, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={First} />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/messagecenter`}
          component={MessageCenter}
        />
        <Route exact path={`${process.env.PUBLIC_URL}/*`} component={Error} />
      </Switch>
    </>
  )
}

export default App
