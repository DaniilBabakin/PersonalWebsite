import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../styles/tennisCenterPage.scss"
import { Footer } from "../components/footer/footer"
import Header from "../components/header/header"

export default function TennisCenterPage() {
  const [headerActive, setActiveHeader] = useState(false)
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    if (canScroll === true) {
      document.querySelector("body").classList.add("no-scroll-hover")
    } else {
      document.querySelector("body").classList.remove("no-scroll-hover")
    }
  }, [canScroll])
  useEffect(() => {
    document.body.scrollTo({ top: 0 })
  }, [])
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration: 1.2}}
      className="single__project"
    >
      {headerActive === false ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="header__button"
          fill="#ffffff"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
          onClick={() => {
            setActiveHeader(true)
            setCanScroll(true)
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <Header
          setActiveHeader={setActiveHeader}
          headerActive={headerActive}
          setCanScroll={setCanScroll}
        />
      )}

      <motion.div
        className="github__div"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, ...transition }}
      >
        <a
          href="https://tennis-center.vercel.app"
          rel="noreferrer"
          target="_blank"
          className="github__link"
        >
          <img
            src={require("../assets/link.png")}
            alt="Link on project"
            className="github__icon"
          />
          <span className="github__span link">Website Link</span>
        </a>
      </motion.div>

      <motion.h1
        className="single__project__title"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ...transition }}
      >
        TENNIS CENTER
      </motion.h1>

      <motion.img
        src={require("../assets/tennisCenterPage/mockup.png")}
        alt="instagramCloneImage"
        className="single__project__image tennis-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      />

      {/*--------------------Контейнер с описанием проекта-------------------- */}
      <div className="about__project">
        <span className="feature-text">A MISSION FOR ME WAS TO CREATE SOMETHING SPECIAL</span>
        <img 
          className="feature-image" 
          alt="website screenshot"
          src={require("../assets/tennisCenterPage/screen2.png")}
        />
        <span 
          className="feature-text"
        >I TRY TO ACHIEVE IT, USING SOUND EFFECTS, CUSTOM DESIGN AND COMPLEX ANIMATIONS</span>
        <img 
          className="feature-image" 
          alt="about screenshot"
          src={require("../assets/tennisCenterPage/about.png")}
        />
      </div>

      <Footer />
    </motion.div>
  )
}
