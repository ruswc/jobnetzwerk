import React from 'react'

import house from 'img/vector/house.svg'
import news from 'img/vector/news.svg'
import jobagent from 'img/vector/jobagent.svg'
import notebook from 'img/vector/notebook.svg'
import date from 'img/vector/date.svg'
import mediator from 'img/vector/mediator.svg'
import support from 'img/vector/support.svg'

import PropTypes from 'prop-types'
import classNames from 'classnames'

// import Main from './Main'
import { Link } from 'react-router-dom'
import LeftSideBlock from './LeftSide/LeftSideBlock'
import ContainerMainLeftColumn from './Containers/ContainerMainLeftColumn'
import ContainerMainRightColumn from './Containers/ContainerMainRightColumn'

const MainContent = ({ className, children }) => {
  const classes = classNames('', {
    [className]: className
  })

  return (
    <div className="container-fluid">
      <div className="row">
        <ContainerMainLeftColumn className="px-xl-4 d-flex justify-content-center">
          <div className="left-side-container py-4 h-100 w-100">
            <Link to="/">
              <LeftSideBlock img={house} text="Startseite" />
            </Link>
            <Link to="/messagecenter">
              <LeftSideBlock img={news} text="Nachrichten" />
            </Link>
            <LeftSideBlock img={jobagent} text="Jobagent" />
            <LeftSideBlock img={notebook} text="Notizbuch" />
            <LeftSideBlock img={date} text="Termine" />
            <LeftSideBlock img={mediator} text="Vermittler" />
            <LeftSideBlock img={support} text="Support" />
          </div>
        </ContainerMainLeftColumn>
        <ContainerMainRightColumn>
          <div className={classes}>{children}</div>
        </ContainerMainRightColumn>
      </div>
    </div>
  )
}

MainContent.defaultProps = {
  className: '',
  children: null
}

MainContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default MainContent
