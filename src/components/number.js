import React from 'react'

import PropTypes from 'prop-types'

import './number.css'

const Number = (props) => {
  return (
    <div className={`number-number number ${props.rootClassName} `}>
      <span className="number-text">{props.value}</span>
    </div>
  )
}

Number.defaultProps = {
  rootClassName: '',
  value: '1',
}

Number.propTypes = {
  rootClassName: PropTypes.string,
  value: PropTypes.string,
}

export default Number
