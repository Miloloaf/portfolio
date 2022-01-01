import React from 'react'
import { Subtitles } from './Subtitles'
import { Project } from './Project'
import image1 from '../assets/images/Beach_Resort_Pic.PNG'
import image2 from '../assets/images/To_Do_Pic.PNG'
import image3 from '../assets/images/Sweet_V_Pic.PNG'
import image4 from '../assets/images/Tic_Tac_Toe.gif'
import image5 from '../assets/images/Image_Slider_Pic.PNG'
import image6 from '../assets/images/Sushi_Go_Round_Bot.gif'

export const MyProjects = () => {
  return (
    <div className="projectsContainer">
      <Subtitles title={'My Projects'} name={'projects'} />
      <div className="projectButtonsGrid" id="myProjectsId">
        {/* <p className="projectButtonsToggle">ALL</p>
        <p>REACT</p>
        <p>PYTHON</p> */}
      </div>
      <div className="projectsGrid">
        <Project
          projectNumber="1"
          projectName="Beach Resort"
          projectLanguages="React JS"
          projectDescription="Website to advertise available accommodation using Contentful as a headless CMS and interactable filtering of room criteria with React states."
          projectPic={image1}
          projectLive="https://react-beach-hotels-nl.netlify.app"
          projectSource="https://github.com/Miloloaf/breach-resort-tutorial-2"
        />
        <Project
          projectNumber="2"
          projectName="To Do List"
          projectLanguages="React JS"
          projectDescription="Minimalist Todo app that keeps track of your tasks digitally and out of your mind. Ability to keep track tasks between sessions."
          projectPic={image2}
          projectLive={'https://inspiring-todo.netlify.app/'}
          projectSource={'https://github.com/Miloloaf/react-todo-tutorial'}
        />
        <Project
          projectNumber="3"
          projectName="Sweet V's"
          projectLanguages="Javascript"
          projectDescription="Frontpage for a home bakery showing variety of products available."
          projectPic={image3}
          projectLive={'https://baking-sweetv.netlify.app/'}
          projectSource={'https://github.com/Miloloaf/Filter_Project'}
        />
        <Project
          projectNumber="4"
          projectName="Tic Tac Toe"
          projectLanguages="React JS"
          projectDescription="Tic Tac Toe game utilizing Hook States, Styled Components and React-Transition-Group to animate the Game Over screen"
          projectPic={image4}
          projectLive={'https://ml-tic-tac-toe.netlify.app/'}
          projectSource={'https://github.com/Miloloaf/Tic-Tac-Toe'}
        />
        <Project
          projectNumber="5"
          projectName="Instagram Image Slider"
          projectLanguages="React JS"
          projectDescription="A slideshow of images accessed with the Instagram API and fetched with Axios."
          projectPic={image5}
          projectLive={'https://ml-ig-slider-app.netlify.app/'}
          projectSource={'https://github.com/Miloloaf/Instagram_Image_Slider'}
        />
        <Project
          projectNumber="6"
          projectName="Sushi Go Round Bot"
          projectLanguages="Python"
          projectDescription="A vision bot that plays autoplays the Sushi-Go-Round web game. This uses the Python Imaging Library to compare images to determine the correct action to undertake."
          projectPic={image6}
          projectLive={'#'}
          projectSource={'https://github.com/Miloloaf/Sushi-Go-Round-Bot'}
        />
      </div>
    </div>
  )
}
