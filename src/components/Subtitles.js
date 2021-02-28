import React from 'react'
import { useInView } from 'react-intersection-observer'

export const Subtitles = ({ title, name, colour }) => {
  // let options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // }

  // let callback = function (entries, observer) {
  //     entries.forEach(entry => {
  //         if (entry.isIntersecting && entry.intersectionRatio == 1 ){
  //             console.log("Target Aquired")
  //         }
  //     })
  // }

  // var observer = new IntersectionObserver(callback, options)

  // let target = document.querySelector("subtitleCenter")

  const underlineID = name + 'line'

  const { ref, inView, entry } = useInView({
    threshold: 0,
  })

  const flyInText = () => {
    const tar = document.getElementById(name)
    const tarUnderline = document.getElementById(underlineID)
    if (inView) {
      console.log(tar)
      /* target id and apply transtioton to id*/
      tar.classList.add('aboutTransition')
      tarUnderline.classList.add('aboutTransitionUnderline')
      if (colour==="white") {
        tar.style.color = 'hsl(55, 14%, 81%)'
        tarUnderline.style.backgroundColor = 'hsl(55, 14%, 81%)'
      }
    }
  }

  // cosnt getTextWidth = () => {
  //   var c =
  // }

  const underlineAnimation = () => {
    const tar = document.getElementById(underlineID)
          if (colour) {
            tar.style.color = 'red'
          }
  }

  return (
    <div className="subtitleCenter" ref={ref}>
      <h1 className="subtitleStyle" id={name}>
        {title}
      </h1>
      {flyInText()}
      <div className="subtitleUnderline" id={underlineID}>
        {' '}
      </div>
      {/* <h1>Test Text Area</h1> */}
    </div>
  )
}
