import React from 'react'
import PropTypes from 'prop-types'
import LeftSideSubtitle from '../LeftSide/LeftSideSubtitle'

const UserLogo = ({ img, isAuthenticated, userFirstName }) => (
  <div className="user-logo-container p-4">
    <div className="tassel" />
    <div className="user-logo-frame p-3">
      <img src={img} alt="" />
    </div>
    {isAuthenticated && userFirstName && (
      <LeftSideSubtitle text="Beverberprofil">{userFirstName}</LeftSideSubtitle>
    )}
  </div>
)

UserLogo.defaultProps = {
  userFirstName: ''
}

UserLogo.propTypes = {
  img: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  userFirstName: PropTypes.string
}

export default UserLogo
