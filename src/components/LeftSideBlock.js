import React from "react"
import PropTypes from "prop-types"
import LeftSideSubtitle from "./LeftSideSubtitle"

const LeftSideBlock = ({ img, text }) => (
  <div className="left-side-block">
    {img && <img className="logo" src={img} alt="" />}
    {text && <LeftSideSubtitle text={text} />}
  </div>
)

LeftSideBlock.defaultProps = {
  img: "",
  text: ""
}

LeftSideBlock.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string
}

export default LeftSideBlock
