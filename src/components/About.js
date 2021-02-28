import React from 'react'
import { Subtitles } from './Subtitles'
import { ProgrammingLanguages } from './ProgrammingLanguages'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export const About = () => {

  const element = <FontAwesomeIcon icon={faAngleDown} className="faSkills" />

  const otherSkillsArrow = () => {
    const hiddenSkills = document.getElementById("otherSkillsId")
    if (hiddenSkills.style.opacity === '1'){
      hiddenSkills.style.opacity = "0"
      hiddenSkills.style.height = "0"
    }
    else {
      hiddenSkills.style.opacity = "1";
      hiddenSkills.style.height = "100%"
    }
  }

  return (
    <div className="aboutContainer" id="aboutContainer">
      <Subtitles title={'About'} name={'about'} />
      <div className="aboutFlexContainer" id="aboutId">
        <div className="aboutFlex">
          <p className="aboutMe" id="aboutMeId">
            {/* I am a freelance software developer who focuses on web development
            (MERN stack) but I also have experience with Android development.
            Besides software development, I also have a background in pharmacy,
            so I am well suited to building technical solutions that address
            problems in the medical domain. */}
            I'm a self-taught programmer located in the UK focusing on Javascript and React.
            <br/>
            <br/>
            I enjoy creating user-friendly apps and interfaces and experimenting with code by building small applications.
            <br/><br/>
            I have a technical background in Geographical Information Systems and Computer Aided Design (AutoCAD) and have written scripts to aid with my personal workflow. 
            <br /> <br/>
            I am working towards integrating my knowledge in both domains to bridge the gap between data and user.
            <br />
          </p>
          <div className="mySkillsGrid">
            <h3>My Skills Section</h3>
            <div className="programmingSkills">
              <ProgrammingLanguages
                icon="devicon-html5-plain iconProps"
                language="HTML5"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon="devicon-css3-plain"
                language="CSS3"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon="devicon-javascript-plain"
                language="Javascript"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon="devicon-react-original"
                language="React"
              ></ProgrammingLanguages>{' '}
              <ProgrammingLanguages
                icon="devicon-python-plain"
                language="Python"
              ></ProgrammingLanguages>{' '}
              <ProgrammingLanguages
                icon="devicon-postgresql-plain"
                language="PostgreSQL"
              ></ProgrammingLanguages>{' '}
              <ProgrammingLanguages
                icon="devicon-bootstrap-plain"
                language="Bootstrap"
              ></ProgrammingLanguages>
            </div>
            <button className="btnOtherSkills" onClick={otherSkillsArrow}>Other Technical Skills {element}</button>
            <div className="programmingSkills otherSkills" id="otherSkillsId">
              <ProgrammingLanguages
                icon=""
                language="ArcGIS"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon=""
                language="QGIS"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon=""
                language="Mapinfo"
              ></ProgrammingLanguages>
              <ProgrammingLanguages
                icon=""
                language="AutoCAD"
              ></ProgrammingLanguages>
            </div>
          </div>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>
    </div>
  )
}
