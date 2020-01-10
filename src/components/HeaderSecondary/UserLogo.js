import React from "react"
import PropTypes from "prop-types"
import LeftSideSubtitle from "../LeftSide/LeftSideSubtitle"

const UserLogo = ({ img }) => (
  <div className="user-logo-container p-4">
    <div className="tassel" />
    <div className="user-logo-frame p-3">
      <img src={img} alt="" />
    </div>
    <LeftSideSubtitle text="Beverberprofil">Derya Bulut</LeftSideSubtitle>
  </div>
)

UserLogo.propTypes = {
  img: PropTypes.string.isRequired
}

export default UserLogo
