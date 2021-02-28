import React, { useState, useEffect } from 'react'

export const Project = ({
  projectName = 'No Name',
  projectNumber,
  projectLanguages = 'Languages',
  projectDescription = 'Lorem ipsum, dolor sit amet consectetur',
  projectLive,
  projectSource,
  projectPic,
}) => {
  let projId = 'project' + projectNumber

  let mouseOver = (e) => {
    let targetP = document.getElementById(projId+"Btn");
    let bgImg = document.getElementById(projId)
    e.target.style.opacity = '1'
    // 
      // document.getElementById(
      //   projId
      // ).style.background = 'url("./assets/images/Beach_Resort_Pic.PNG")';
      // bgImg.style.backgroundColor = "black";
      // bgImg.style.backgroundImage = `url("src/assets/images/Beach_Resort_Pic.PNG")`
      
      // alert(bgImg.outerHTML)
      if(projectLive === "#"){
      // alert("Hello World");
      targetP.style.backgroundColor="grey"
      targetP.style.cursor="default"
      targetP.style.pointerEvents="none"
      }
  }

  let mouseExit = (e) => {
    e.target.style.opacity = '0'
  }

  useEffect(() => {;
  let bgImg = document.getElementById(projId);
  // bgImg.style.backgroundImage = `url("https://images.unsplash.com/photo-1613869810108-70f9fe0cdef5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80")`
    bgImg.style.backgroundImage = `url(${projectPic})`
}, [])



  return (
    <>
      <div className="projectWrapper">
        <div className="projectThumbnail" id={projId}>
          <div
            className="projectThumbnailTextbox"
            onMouseOver={mouseOver}
            onMouseLeave={mouseExit}
          >
            <div className="projectThumbnailText" >
              <div className="projectName">{projectName}</div>
              <div className="projectlanguages">{projectLanguages}</div>
              <div className="projectDescription">
                {projectDescription}
              </div>
            </div>
            <a
              href={projectLive}
              // target="_blank"
              // rel="noreferrer"
              className="liveBtn"
              id={projId+"Btn"}
            >
              Live Site
            </a>
            <a
              href={projectSource}
              className="repoBtn"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
