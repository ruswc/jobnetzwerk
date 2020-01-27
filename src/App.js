import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="/"> Go to Homepage </Link>
        <Link to="/messagecenter"> Go to Messagecenter </Link>
        <Link to="/adfasdf"> Go to 404 </Link>
        <Switch>
          <Route exact path="/" component={First} />
          <Route exact path="/messagecenter" component={MessageCenter} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    </>
  )
}

export default App
