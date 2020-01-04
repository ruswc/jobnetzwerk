import React from "react"

import LeftSideBlock from "./LeftSideBlock"
import Main from "./Main"

import house from "../img/vector/house.svg"
import textbulb from "../img/vector/textbulb.svg"
import briefcase from "../img/vector/briefcase.svg"
import target from "../img/vector/target.svg"
import calendar from "../img/vector/calendar.svg"

const MainContent = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-4 col-sm-4 col-md-3 col-lg-2">
        <div className="left-side-container py-4 h-100">
          <LeftSideBlock img={house} text="Startseite" />
          <LeftSideBlock img={textbulb} text="Nachrichten" />
          <LeftSideBlock img={briefcase} text="Jobagent" />
          <LeftSideBlock img={target} text="Notizbuch" />
          <LeftSideBlock img={calendar} text="Termine" />
        </div>
      </div>
      <div className="col-8 col-sm-8 col-md-9 col-lg-10">
        <Main />
      </div>
    </div>
  </div>
)

export default MainContent
