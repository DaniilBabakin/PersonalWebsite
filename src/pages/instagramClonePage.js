import React, { useEffect } from "react"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"
import "../styles/singleProject.scss"
import "../styles/instagramClonePage.scss"
import { Footer } from "../components/footer/footer"
export default function InstagramClonePage() {
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="single__project">
      <motion.h1
        className="single__project__title"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, ...transition }}
      >
        INSTAGRAM CLONE
      </motion.h1>
      <ProgressiveImage
        src={require("../assets/ic3.jpg")}
        placeholder={require("../assets/ic3.jpg")}
      >
        {(src) => (
          <motion.img
            src={src}
            alt="instagramCloneImage"
            className="single__project__image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
          />
        )}
      </ProgressiveImage>


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
            src={require("../assets/instagramClonePage/1.png")}
            className="instagram__point__img"
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
          <div className="instagram__point__titles" style={{textAlign:"left"}}>
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
      </div>
      <Footer/>
    </div>
  )
}
