import "../../styles/projects.scss"
import { motion, useViewportScroll, useTransform } from "framer-motion"
import { useWindowSize } from "../../hooks/useWindowSize"
import { InstagramClone } from "./projectsCards/instagramClone"
import { OpticaVzor } from "./projectsCards/opticaVzor"
import { useState } from "react"
import { useEffect } from "react"

export default function Projects() {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  //Отслеживание размеров окна для применения эффектов
  const size = useWindowSize()
  const scrollStart = size.height * 0.5
  const scrollAmount = size.height > 900 ? size.height : size.height * 0.8
  const { scrollYProgress, scrollY } = useViewportScroll()
  let projectsDiv = document.querySelector(`.projects`)
  let content = document.querySelector(`.projects__container`)
  let contentTitle = document.querySelector(`.projects__title`)
  let mainDiv = document.querySelector(`.main`)
  const [distanceFromTop, setDistanceFromTop] = useState()

  useEffect(() => {
    let content = document.querySelector(`.projects__container`)
    // console.log(content.offsetHeight - contentTitle.offsetHeight)

    content !== undefined &&
      setDistanceFromTop(content.getBoundingClientRect().top)
  }, [])
  console.log(size.width)
  document.documentElement.style.overflowX = "hidden"
  // var content = document.getElementById("content_2")
  if (size.width >= 1920) {
    window.addEventListener("scroll", function () {
      if (
        mainDiv !== undefined &&
        content !== undefined &&
        contentTitle !== undefined
      ) {
        var scrolledY = window.scrollY
        var scrolledX = window.scrollX

        if (
          scrolledY > mainDiv.clientHeight &&
          scrolledY < distanceFromTop * 2 + 100
        ) {
          contentTitle.style.position = "fixed"
          contentTitle.style.top = 7.8 + "vh"
        }
        if (scrolledY <= mainDiv.clientHeight) {
          contentTitle.style.marginTop = 0 + "px"
          contentTitle.style.position = "initial"
        }
        if (scrolledY >= distanceFromTop * 2 + 100) {
          contentTitle.style.position = "absolute"
          contentTitle.style.top =
            projectsDiv.clientHeight * 1 - size.height * 1 + 20 + "px"
        }

        if (
          scrolledY > mainDiv.clientHeight &&
          scrolledY < distanceFromTop * 2 + 100
        ) {
          content.style.top = 26.1 + "vh"
          content.style.position = "fixed"
          if (
            scrolledY > mainDiv.clientHeight &&
            scrolledY < distanceFromTop * 2
          ) {
            content.style.left =
              -(scrolledY - mainDiv.clientHeight - 120) * 0.55 + "px"
          }
        }
        if (scrolledY <= mainDiv.clientHeight) {
          content.style.marginTop = 0 + "px"
          content.style.position = "initial"
        }
        if (scrolledY >= distanceFromTop * 2 + 100) {
          content.style.position = "absolute"
          content.style.top =
            projectsDiv.clientHeight * 1 - size.height * 0.8 + "px"
        }
      }
    })
  }
  const filter = useTransform(
    scrollY,
    [scrollStart, scrollAmount],
    ["blur(15px)", "blur(0px)"]
  )
  const opacity = useTransform(scrollY, [scrollStart, scrollAmount], [0, 1])
  return (
    <motion.div
      className="projects"
      style={{
        height: size.width >= 1920 && distanceFromTop * 1.7,
        position: "relative",
      }}
    >
      <motion.h1 className="projects__title">PROJECTS</motion.h1>
      <motion.div className="projects__container">
        <InstagramClone />
        <OpticaVzor />
      </motion.div>
    </motion.div>
  )
}
