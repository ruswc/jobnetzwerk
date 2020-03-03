import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const GuestRoute = ({ isGuest, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isGuest ? <Component {...props} /> : <Redirect to="/" />)}
  />
)

GuestRoute.defaultProps = {
  isGuest: false,
  component: null
}

GuestRoute.propTypes = {
  isGuest: PropTypes.bool,
  component: PropTypes.node
}

export default GuestRoute
