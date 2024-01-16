import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "../styles/instagramClonePage.scss"
import { Footer } from "../components/footer/footer"
import Header from "../components/header/header"

export default function InstagramClonePage() {
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
      {headerActive !== null && headerActive === false ? (
        <svg
          className="header__button"
          xmlns="http://www.w3.org/2000/svg"
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
          href="https://github.com/DaniilBabakin/instagramClone"
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
          href="https://instagram-clone-tan-iota.vercel.app/"
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
        INSTAGRAM CLONE
      </motion.h1>

      <motion.img
        src={require("../assets/instagram.jpg")}
        alt="instagramCloneImage"
        className="single__project__image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      />

      {/*--------------------Контейнер с описанием проекта-------------------- */}
      {/* <div className="about__project">
        <motion.div
          className="instagram__point"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 2, ...transition }}
        >
          <img
            src={require("../assets/instagramClonePage/1.png")}
            className="instagram__point__img"
            alt="Login/Sign Up page"
          />
          <div className="instagram__point__circle"></div>
          <div className="instagram__point__titles">
            <h3 className="about__project__title">Login/Sign Up page</h3>
            <span className="about__project__subtitle">
              Реализовано на GoogleFirebase
            </span>
          </div>
        </motion.div>

        <motion.div
          className="instagram__point"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, ...transition }}
        >
          <div className="instagram__point__titles">
            <h3 className="about__project__title">Адаптивная верстка </h3>
            <span className="about__project__subtitle">
              Для лучших ощущений от приложения
            </span>
          </div>
          <div className="instagram__point__circle"></div>
          <img
            src={require("../assets/instagramClonePage/2.png")}
            className="instagram__point__img"
            alt="Adaptive"
          />
        </motion.div>

        <motion.div
          className="instagram__point"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, ...transition }}
        >
          <img
            src={require("../assets/instagramClonePage/3.png")}
            className="instagram__point__img"
            alt="Design"
          />
          <div className="instagram__point__circle"></div>
          <div className="instagram__point__titles">
            <h3 className="about__project__title">Дизайн, как в оригинале </h3>
            <span className="about__project__subtitle">
              Выполнен на Tailwind
            </span>
          </div>
        </motion.div>

        <motion.div
          className="instagram__point"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1, ...transition }}
        >
          <div
            className="instagram__point__titles"
            style={{ textAlign: "left" }}
          >
            <h3 className="about__project__title">Функционал </h3>
            <span className="about__project__subtitle">
              &#9829; Модальные окна
            </span>
            <br />
            <span className="about__project__subtitle">
              &#9824; Создание постов
            </span>
            <br />
            <span className="about__project__subtitle">
              &#9830; Изменение аватара
            </span>
          </div>
          <div className="instagram__point__circle"></div>
          <div className="instagram__point__titles">
            <span className="about__project__subtitle">
              И многое другое 🚀{" "}
            </span>
          </div>
        </motion.div>
      </div> */}

      <Footer />
    </motion.div>
  )
}
