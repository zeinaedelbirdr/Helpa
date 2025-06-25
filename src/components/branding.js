import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-branding ${props.rootClassName} `}>
      <img alt={props.logoAlt} src={props.logoSrc} className="branding-logo" />
      <h2 className="branding-company-name">{props.companyName}</h2>
    </div>
  )
}

Branding.defaultProps = {
  logoAlt: 'image',
  rootClassName: '',
  companyName: 'Helpa',
  logoSrc: '/logo.svg',
}

Branding.propTypes = {
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
  companyName: PropTypes.string,
  logoSrc: PropTypes.string,
}

export default Branding
