import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../styles/instagramClonePage.scss"
import { Footer } from "../components/footer/footer"
import Header from "../components/header/header"
import ProgressiveImage from "../components/progressiveImage"
export default function OpticaVzorPage() {
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
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="single__project">
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
          href="https://github.com/DaniilBabakin/OpticaVzorSite"
          rel="noreferrer"
          target="_blank"
          className="github__link"
        >
          <img
            src={require("../assets/Github.png")}
            alt="GitHub"
            className="github__icon"
          />
          <span className="github__span">Project on GitHub</span>
        </a>

        <a
          href="https://opticavzor.ru"
          rel="noreferrer"
          target="_blank"
          className="github__link"
        >
          <img
            src={require("../assets/link.png")}
            alt="Link on project"
            className="github__icon"
          />
          <span className="github__span link">Project Link</span>
        </a>
      </motion.div>

      <motion.h1
        className="single__project__title"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ...transition }}
      >
        OPTICA VZOR
      </motion.h1>

      <motion.img
        src={require("../assets/OpticaVzorPage/OpticaVzor.png")}
        alt="instagramCloneImage"
        className="single__project__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      />

      {/*--------------------Контейнер с описанием проекта-------------------- */}
      <div className="about__project">
        <motion.div
          className="instagram__point"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 2, ...transition }}
        >
          <img
            src={require("../assets/OpticaVzorPage/OpticaVzorDesign.png")}
            className="instagram__point__img"
            alt="Login/Sign Up page"
          />
          <div className="instagram__point__circle"></div>
          <div className="instagram__point__titles">
            <h3 className="about__project__title">Дизайн</h3>
            <span className="about__project__subtitle">
              Собственный дизайн с нуля
            </span>
          </div>
        </motion.div>

        <motion.div
          className="instagram__point opticaVzor"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, ...transition }}
        >
          <div className="instagram__point__titles">
            <h3 className="about__project__title">Фильтрация </h3>
            <span className="about__project__subtitle">
              Для максимального удобства
            </span>
          </div>
          <div className="instagram__point__circle"></div>
          <img
            src={require("../assets/OpticaVzorPage/OpticaVzorFiltering.png")}
            className="instagram__point__img"
            alt="Adaptive"
          />
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
