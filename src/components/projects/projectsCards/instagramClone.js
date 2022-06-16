import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
} from "framer-motion"
import ProgressiveImage from "react-progressive-image"
import { Link } from "react-router-dom"

export const InstagramClone = () => {
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
      exit={{scale:1.5}}
      transition={{duration:5,...transition}}
    >
      {/*Сама "карточка" проекта*/}
      <motion.div className="project__card">
      <Link to={`/projects/instagram-clone`}>
        <ProgressiveImage
          src={require("../../../assets/ic3.jpg")}
          placeholder={require("../../../assets/ic3.jpg")}
        >
          {(src) => (
            <motion.img
              src={src}
              alt="aboba"
              className="project__card__image"
            />
          )}
        </ProgressiveImage>
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
        <span>INSTAGRAM CLONE</span>
        <span className="project__card__text__stack">
          React/Tailwind/Firebase
        </span>
      </motion.div>
    </motion.div> /*Конец Wrapper */
  )
}
