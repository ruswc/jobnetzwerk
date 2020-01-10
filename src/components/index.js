import React from "react"

import house from "img/vector/house.svg"
import news from "img/vector/news.svg"
import jobagent from "img/vector/jobagent.svg"
import notebook from "img/vector/notebook.svg"
import date from "img/vector/date.svg"
import mediator from "img/vector/mediator.svg"
import support from "img/vector/support.svg"
import Main from "./Main"
import LeftSideBlock from "./LeftSide/LeftSideBlock"

const MainContent = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-3 col-sm-3 col-md-3 col-lg-2 px-2 px-sm-3 px-xl-4 d-flex justify-content-center">
        <div className="left-side-container py-4 h-100 w-100">
          <LeftSideBlock img={house} text="Startseite" />
          <LeftSideBlock img={news} text="Nachrichten" />
          <LeftSideBlock img={jobagent} text="Jobagent" />
          <LeftSideBlock img={notebook} text="Notizbuch" />
          <LeftSideBlock img={date} text="Termine" />
          <LeftSideBlock img={mediator} text="Vermittler" />
          <LeftSideBlock img={support} text="Support" />
        </div>
      </div>
      <div className="col-9 col-sm-9 col-md-9 col-lg-10 px-2 px-sm-3 px-xl-4">
        <Main />
      </div>
    </div>
  </div>
)

export default MainContent
