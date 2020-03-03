import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Dropdown = ({ isAuthenticated, signOut, userFirstName }) => {
  const handleSignOut = () => signOut()
  return (
    <div id="user-dropdown-menu" hidden>
      <ul className="dropdown-menu">
        {isAuthenticated && userFirstName && <li>{userFirstName}</li>}
        {isAuthenticated && (
          <li>
            <Button onClick={handleSignOut}>Sign Out</Button>
          </li>
        )}
      </ul>
    </div>
  )
}

Dropdown.defaultProps = {
  isAuthenticated: false,
  signOut: () => {},
  userFirstName: 'User'
}

Dropdown.propTypes = {
  isAuthenticated: PropTypes.bool,
  userFirstName: PropTypes.string,
  signOut: PropTypes.func
}

export default Dropdown
