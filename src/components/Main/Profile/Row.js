import React from "react"
import PropTypes from "prop-types"

const Row = ({ img, header, text }) => (
  <div className="row">
    <div className="col-1 p-0 d-flex justify-content-center align-items-center">
      <img src={img} alt="" className="icon" />
    </div>
    <div className="col-11">
      {header && <h5 className="text-capitalize">{header}</h5>}
      {text && <p className="text-body">{text}</p>}
    </div>
  </div>
)

Row.defaultProps = {
  img: "",
  header: "",
  text: ""
}

Row.propTypes = {
  img: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string
}

export default Row
