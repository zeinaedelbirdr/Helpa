import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div id="banner" data-persistence="true" className="banner-banner">
      <div className="banner-captions">
        <div className="banner-caption1">
          <span className="banner-text1">{props.caption}</span>
          <a
            href={props.redirect}
            target="_blank"
            rel="noreferrer noopener"
            className="banner-link1"
          >
            {props.bold}
          </a>
        </div>
        <a href={props.redirectMobile} className="banner-link2">
          <div className="banner-caption2">
            <span className="banner-text2">{props.captionMobile}</span>
            <span className="banner-text3">{props.bold1}</span>
          </div>
        </a>
      </div>
      <div id="close" className="banner-close">
        <svg viewBox="0 0 1024 1024" className="banner-icon1">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  bold1: 'newsletter',
  redirect: 'https://medium.com',
  caption: 'Get updates and action alerts from Helpa by joining our',
  captionMobile: 'Join our',
  bold: 'newsletter',
  redirectMobile: 'https://medium.com',
}

Banner.propTypes = {
  bold1: PropTypes.string,
  redirect: PropTypes.string,
  caption: PropTypes.string,
  captionMobile: PropTypes.string,
  bold: PropTypes.string,
  redirectMobile: PropTypes.string,
}

export default Banner
