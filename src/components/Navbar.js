import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
  const navMenuClick = () => {
    let display = document.getElementsByClassName('verticalNav')[0]
    display.style.opacity === '1'
      ? (display.style.opacity = '0')
      : (display.style.opacity = '1')
  }

  const scroller = (target) => {
    const tarId = document.getElementById(target)
    // console.log(tarId)
    // console.log('yo')
    tarId.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <>
      <div className="navContainer">
        <div className="horizontalNavContainer">
          <nav>
            <div className="navLinks horizontalNav">
              <a onClick={() => scroller('heroId')}>Home</a>
              <a onClick={() => scroller('aboutMeId')}>About</a>
              <a onClick={() => scroller('myProjectsId')}>Portfolio</a>
              <a onClick={() => scroller('contactContainer')}>Contact</a>
            </div>

            <FontAwesomeIcon
              icon={faBars}
              className="faMenu"
              onClick={navMenuClick}
            ></FontAwesomeIcon>
          </nav>
        </div>
        <div className="verticalNav">
          <ul>
            <li>
              <a onClick={() => scroller('heroId')}>Home</a>
            </li>

            <li>
              <a onClick={() => scroller('aboutMeId')}>About</a>
            </li>
            <li>
              <a onClick={() => scroller('myProjectsId')}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => scroller('contactContainer')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
