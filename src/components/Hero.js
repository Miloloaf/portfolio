import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const Hero = () => {
  const element = <FontAwesomeIcon icon={faAngleRight} className="faHero" />

  const scroller = (target) => {
    const tarId = document.getElementById(target)
    tarId.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }



    return (
      <>
        <div className="heroContainer" id="heroId">
          <div className="heroBackground">
            <div className="heroText">
              <p>
                Hello, I'm <span>Myles Lam</span>.
              </p>
              <p>I'm a self-taught programmer.</p>
            </div>
            <a onClick={() => scroller('myProjectsId')}>
              See my work {element}
            </a>
          </div>
        </div>
      </>
    )
}   
