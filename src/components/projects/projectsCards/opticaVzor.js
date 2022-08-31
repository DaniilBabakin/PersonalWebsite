import React from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion"
import { Link } from "react-router-dom"
import ProgressiveImage from "../../progressiveImage"

export const OpticaVzor = () => {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  //Transition для вспомогательных линий(белые линии при Hover)
  const topBottomLine = {
    initial: {
      height: "0",
    },
    hover: {
      height: "2rem",
    },
  }
  const rightLeftLine = {
    initial: {
      width: "0",
    },
    hover: {
      width: "2rem",
    },
  }
  //Transition для текста под изображением
  const stackText = {
    initial: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
    },
  }
  return (
    /*Этот Div - Wrapper,нам он нужен,чтобы правильно работал Hover(без него из-за изменения scale будут баги) */
    <motion.div
      initial="initial"
      whileHover="hover"
      className="project__wrapper"
      transition={{ duration: 5, ...transition }}
    >
      {/*Сама "карточка" проекта*/}
      <motion.div
        className="project__card"
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 5, ...transition }}
      >
        <Link to={`/projects/optica-vzor`}>
          <motion.img
            src={require("../../../assets/OpticaVzorPage/OpticaVzor.png")}
            alt="OpticaVzor"
            className="project__card__image"
          />
        </Link>
      </motion.div>

      {/*Четыре составляющие карточки проекта,при наведении на него(белые линии с каждой стороны,эффект зума) */}
      <motion.div
        className="wrapper__line top"
        variants={topBottomLine}
        transition={transition}
      ></motion.div>
      <motion.div
        className="wrapper__line right"
        variants={rightLeftLine}
        transition={transition}
      ></motion.div>
      <motion.div
        className="wrapper__line bottom"
        variants={topBottomLine}
        transition={transition}
      ></motion.div>
      <motion.div
        className="wrapper__line left"
        variants={rightLeftLine}
        transition={transition}
      ></motion.div>

      {/*Текст под изображением*/}
      <motion.div
        className="project__card__text"
        variants={stackText}
        transition={transition}
      >
        <span>OPTICA VZOR</span>
        <span className="project__card__text__stack">React/Scss</span>
      </motion.div>
    </motion.div> /*Конец Wrapper */
  )
}
