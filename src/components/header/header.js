import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse"
import "./header.scss"
import "../skills/skills.scss"
import { AnimatePresence, motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function Header({ setActiveHeader, headerActive,setCanScroll }) {
  const transition = { duration: 0.07, ease: [0.43, 0.13, 0.23, 0.96] }

  return (
    <AnimatePresence>
      {headerActive && (
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="header"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="header__button header__close__button"
            fill="#ffffff"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
            onClick={() => {setActiveHeader(false);setCanScroll(false)}}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <MouseParallaxContainer
            className="skills__container navbar"
            resetOnLeave
          >
            <MouseParallaxChild factorX={0.2} className="skills__item__wrapper">
              <Link to={'/'} onClick={()=>setCanScroll(true)}><h3 className="navbar__link first">HOME</h3></Link>
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.2} className="skills__item__wrapper">
      {/*<Link to={'/about-me'} onClick={()=>setCanScroll(true)}><h3 className="navbar__link">ABOUT ME</h3></Link>*/}
            </MouseParallaxChild>
          </MouseParallaxContainer>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
