import React from 'react'

import PropTypes from 'prop-types'

import Number from './number'
import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-steps-list">
      <div className="steps-list">
        <div className="steps-section1">
          <Number></Number>
          <span className="steps-caption1">{props.caption4}</span>
        </div>
        <div className="steps-divider1"></div>
        <div className="steps-section2">
          <Number value="2" rootClassName="numberroot-class-name"></Number>
          <span className="steps-caption2">{props.caption41}</span>
        </div>
        <div className="steps-divider2"></div>
        <div className="steps-section3">
          <Number value="3" rootClassName="numberroot-class-name1"></Number>
          <span className="steps-caption3">{props.caption411}</span>
        </div>
        <div className="steps-divider3"></div>
        <div className="steps-section4">
          <Number value="4" rootClassName="numberroot-class-name2"></Number>
          <span className="steps-caption4">{props.caption4111}</span>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  caption4111: 'Sed ut perspiciatis unde omnis',
  caption41: 'Duis aute irure dolor in reprehenderit',
  caption4: 'Lorem ipsum dolor sit amet',
  caption411: 'Excepteur sint occaecat cupidatat',
}

Steps.propTypes = {
  caption4111: PropTypes.string,
  caption41: PropTypes.string,
  caption4: PropTypes.string,
  caption411: PropTypes.string,
}

export default Steps
