import React from "react"
import edit from "img/vector/edit.svg"

const UserMenu = () => (
  <div className="user-edit-wrapper d-flex flex-row justify-content-center align-items-center">
    <div className="user-edit-container d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="img-item title">Neu</div>
      <div className="icon img-item">
        <img src={edit} alt="" />
      </div>
    </div>
  </div>
)

export default UserMenu
