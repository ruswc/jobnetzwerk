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
import ContainerMainLeftColumn from "./Containers/ContainerMainLeftColumn"
import ContainerMainRightColumn from "./Containers/ContainerMainRightColumn"

const MainContent = () => (
  <div className="container-fluid">
    <div className="row">
      <ContainerMainLeftColumn className="px-xl-4 d-flex justify-content-center">
        <div className="left-side-container py-4 h-100 w-100">
          <LeftSideBlock img={house} text="Startseite" />
          <LeftSideBlock img={news} text="Nachrichten" />
          <LeftSideBlock img={jobagent} text="Jobagent" />
          <LeftSideBlock img={notebook} text="Notizbuch" />
          <LeftSideBlock img={date} text="Termine" />
          <LeftSideBlock img={mediator} text="Vermittler" />
          <LeftSideBlock img={support} text="Support" />
        </div>
      </ContainerMainLeftColumn>
      <ContainerMainRightColumn>
        <Main />
      </ContainerMainRightColumn>
    </div>
  </div>
)

export default MainContent
