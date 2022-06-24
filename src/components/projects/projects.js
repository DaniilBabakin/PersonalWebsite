import "../../styles/projects.scss"
import {
  motion,
  useViewportScroll,
  useTransform
} from "framer-motion"
import { useWindowSize } from "../../hooks/useWindowSize"
import { InstagramClone } from "./projectsCards/instagramClone"
import { OpticaVzor } from "./projectsCards/opticaVzor"
import { useState } from "react"

export default function Projects() {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  //Отслеживание размеров окна для применения эффектов
  const size = useWindowSize()
  const scrollStart = size.height * 0.5
  const scrollAmount = size.height > 900 ? size.height : size.height * 0.8
  const { scrollYProgress, scrollY } = useViewportScroll()
  const filter = useTransform(
    scrollY,
    [scrollStart, scrollAmount],
    ["blur(15px)", "blur(0px)"]
  )
  const opacity = useTransform(scrollY, [scrollStart, scrollAmount], [0, 1])

  const scrollContainer = document.querySelector(`.projects__container`);
  const body = document.body
  console.log(window.scrollY)
  scrollContainer && scrollContainer.addEventListener(`wheel`, (evt) => {
    evt.preventDefault();
    //check if you are at the end of horizontal scroll here
    if (
      scrollContainer.scrollWidth - scrollContainer.clientWidth ===
      scrollContainer.scrollLeft &&
      Math.sign(evt.deltaY) === 1
    ) {
      console.log("Конец")
      return window.scrollTo(0, window.scrollY + evt.deltaY/2)
    }
    if (
      scrollContainer.scrollLeft === 0 &&
      Math.sign(evt.deltaY) === -1
    ) {
      console.log("Конец")
      return window.scrollTo(0, window.scrollY + evt.deltaY/2)
    }
  
  
    //Horizontal scroll code here
    scrollContainer.scrollLeft += evt.deltaY;
    evt.deltaY = 0;
  });

  return (
    <>
      <motion.div className="projects" style={{ filter, opacity }} exit={{opacity:0}} transition={{duration:50,...transition}}>
        <motion.h1 className="projects__title">PROJECTS</motion.h1>
          <motion.div className="projects__container">
            <InstagramClone />
            <OpticaVzor />
          </motion.div>
      </motion.div>
    </>
  )
}
