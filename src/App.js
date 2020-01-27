import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <First />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/messagecenter`}>
            <MessageCenter />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
