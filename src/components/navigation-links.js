import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav
      className={`navigation-links-navigation-links ${props.rootClassName} `}
    >
      <div className="navigation-links-links">
        <Link to="/" className="navigation-links-link1 navLink">
          {props.link}
        </Link>
        <Link to="/" className="navigation-links-link2 navLink">
          {props.link1}
        </Link>
        <Link to="/" className="navigation-links-link3 navLink">
          {props.link2}
        </Link>
        <Link to="/" className="navigation-links-link4 navLink">
          {props.link3}
        </Link>
      </div>
      <div className="navigation-links-hamburger">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="navigation-links-image"
        />
      </div>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  link1: 'Take Action',
  rootClassName: '',
  imageAlt: 'image',
  link: 'Mission',
  imageSrc: '/hamburger.svg',
  link2: 'News',
  link3: 'Contact',
}

NavigationLinks.propTypes = {
  link1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  link: PropTypes.string,
  imageSrc: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
}

export default NavigationLinks
