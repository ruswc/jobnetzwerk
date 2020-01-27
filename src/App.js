import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import BrowserRouter from 'react-router-dom/modules/BrowserRouter'

import First from './pages/First'
import MessageCenter from './pages/MessageCenter'
import Error from './pages/Error'

function App() {
  return (
    <>
      {/* <BrowserRouter basename="/"> */}
      <Switch>
        <Route exact path="/" component={First} />
        <Route path="/messagecenter" component={MessageCenter} />
        <Route path="/*" component={Error} />
      </Switch>
      {/* </BrowserRouter> */}
    </>
  )
}

export default App
