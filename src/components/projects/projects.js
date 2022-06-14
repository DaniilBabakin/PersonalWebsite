import "../../styles/projects.scss"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion"
import { useWindowSize } from "../../hooks/useWindowSize"
import ProgressiveImage from "react-progressive-image"

export default function Projects() {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  const size = useWindowSize()
  const scrollStart = size.height * 0.5
  const scrollAmount = size.height > 900 ? size.height : size.height * 0.8
  const { scrollYProgress, scrollY } = useViewportScroll()
  const filter = useTransform(
    scrollY,
    [scrollStart, scrollAmount],
    ["blur(15px)", "blur(0px)"]
  )

  const topBottomLine = {
    initial: {
      height:"0"
    },
    hover: {
      height:"2rem"
    },
  }
  const rightLeftLine = {
    initial: {
      width:"0"
    },
    hover: {
      width:"2rem"
    },
  }
  const stackText = {
    initial: {
      opacity:0
    },
    hover: {
      opacity:1
    },
  }
  const opacity = useTransform(scrollY, [scrollStart, scrollAmount], [0, 1])

  return (
    <>
    <motion.div className="projects" style={{ filter, opacity }}>
      <div className="projects__container">
        <motion.h1 className="projects__title">PROJECTS</motion.h1>

        <motion.div
          initial="initial"
          whileHover="hover"
          className="project__wrapper"
        >
          {/* child motion component sets variants that match the keys set by the parent to animate accordingly */}
          <motion.div
            className="project__card"
          />
          <motion.div className="wrapper__line top" variants={topBottomLine} transition={transition}></motion.div>
          <motion.div className="wrapper__line right" variants={rightLeftLine} transition={transition}></motion.div>
          <motion.div className="wrapper__line bottom" variants={topBottomLine} transition={transition}></motion.div>
          <motion.div className="wrapper__line left" variants={rightLeftLine} transition={transition}></motion.div>
          <motion.div className="project__card__text" variants={stackText} transition={transition}>
            <span>INSTAGRAM CLONE</span>
            <span className="project__card__text__stack">
              React/Tailwind/Firebase
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>

      
    </>
  )
}
