import React from 'react'
import { Switch, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'
import GuestRoute from './containers/routes/GuestRoute'

import SignIn from './pages/SignIn'
import PrivateRoute from './containers/routes/PrivateRoute'

function App() {
  return (
    <>
      <Switch>
        <GuestRoute path="/signin" exact component={SignIn} />
        <PrivateRoute path="/" exact component={First} />
        <PrivateRoute
          path="/messagecenter"
          exact
          component={() => <MessageCenter list />}
        />
        <PrivateRoute
          path="/messagecenter/read"
          exact
          component={() => <MessageCenter read />}
        />
        <PrivateRoute
          path="/messagecenter/answer"
          exact
          component={() => <MessageCenter answer />}
        />
        <Route path="/*" exact component={Error} />
      </Switch>
    </>
  )
}

export default App
