import React from 'react'
import cv from 'img/vector/cv.svg'
import more from 'img/vector/more.svg'

const ProfileHeader = () => (
  <div>
    <div className="profile-header">
      <div className="container-fluid mr-2">
        <div className="img-container">
          <img src={cv} alt="" />
        </div>
        <h6>Bewerberproﬁl Eingaben für das Matching</h6>
      </div>
      <div className="properties">
        <img src={more} alt="" />
      </div>
    </div>
  </div>
)

export default ProfileHeader
