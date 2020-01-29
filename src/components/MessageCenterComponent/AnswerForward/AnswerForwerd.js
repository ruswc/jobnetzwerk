import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as AnswerArrow } from 'img/vector/icons/answerarrow.svg'
import { ReactComponent as ForwardArrow } from 'img/vector/icons/forwardarrow.svg'

const AnswerForward = ({ end, answerText, forwardText }) => {
  return (
    <div
      className={`my-2 container-fluid d-flex${(end &&
        ' justify-content-end') ||
        ' justify-content-start'} secondary-text`}
    >
      <div className="row">
        <div className="col-auto d-flex flex-row">
          <AnswerArrow style={{ width: '1rem' }} />
          <div className="ml-2">{answerText}</div>
        </div>
        <div className="col-auto d-flex flex-row">
          <ForwardArrow style={{ width: '1rem' }} />
          <div className="ml-2">{forwardText}</div>
        </div>
      </div>
    </div>
  )
}

AnswerForward.defaultProps = {
  end: false,
  answerText: '',
  forwardText: ''
}

AnswerForward.propTypes = {
  end: PropTypes.bool,
  answerText: PropTypes.string,
  forwardText: PropTypes.string
}

export default AnswerForward
