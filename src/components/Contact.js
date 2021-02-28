import React from 'react'
import {Subtitles} from './Subtitles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export const Contact = () => {
    return (
      <div className="contactContainer" id="contactContainer">
        <Subtitles title={'Contact'} name={'contact'} colour="white" />
        <p className="contactP">Get in touch using the platforms below</p>
        <div className="contactsGrid">
          <a href="https://github.com/Miloloaf" className="contactIcon">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/myles-lam-07b60186/"
            className="contactIcon"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="footerCopywrite">Myles Lam Ⓒ2021</p>
      </div>
    )
}