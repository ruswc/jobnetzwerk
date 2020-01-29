import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <HashRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/messagecenter">
            <MessageCenter list />
          </Route>
          <Route exact path="/messagecenter/read">
            <MessageCenter read />
          </Route>
          <Route exact path="/messagecenter/answer">
            <MessageCenter answer />
          </Route>
          <Route path="/*" component={Error} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default App
