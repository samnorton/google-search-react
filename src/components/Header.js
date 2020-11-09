import React from 'react'

const Header = () => {
    return (
        <>
<ul className="nav nav-pills float-right">
    <li><a target='_blank' href="" className="colorfix"><button className="btn" role="button">Sign in</button></a></li>
    <li>
      <a target='_blank' title="Google apps" className="firstsbuttons" href="">
      <img className="quad" src="https://i.imgur.com/8duD4WI_d.webp" height="22" width="22" />
      </a>
    </li>
    <li><a target='_blank' className="firstsbuttons" href="">Images</a></li>
    <li><a target='_blank' className="firstsbuttons" href="">Gmail</a></li>
  </ul>

  </>
    )
}

export default Header
