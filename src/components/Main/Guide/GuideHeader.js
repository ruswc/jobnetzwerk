import React from 'react'
import circles from 'img/vector/circles.svg'
import info from 'img/vector/info.svg'

const GuideHeader = () => (
  <div className="guide-header">
    <div className="container-fluid mr-2">
      <div className="img-container">
        <img src={circles} alt="" />
      </div>
      <h6>JobImpulse Fragebogen öﬀnen!</h6>
    </div>
    <div className="info">
      <img src={info} alt="" />
    </div>
  </div>
)

export default GuideHeader
