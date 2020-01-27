import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Switch> */}
        <Route exact path="/" component={First} />
        <Route path="/messagecenter" component={MessageCenter} />
        <Route path="/*" component={Error} />
        {/* </Switch> */}
      </Router>
    </>
  )
}

export default App
