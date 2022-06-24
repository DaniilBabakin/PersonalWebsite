import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./contactForm.scss"
import { motion } from "framer-motion"

export const ContactForm = () => {
  const transition = { delay: 0.5, duration: 1.3, ease: [0.43, 0.13, 0.23, 0.96] }
  const transitionYouSpan = { delay: 1.5, duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  const [isEmailSended, setIsEmailSended] = useState(false)
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    setIsEmailSended(true)
    emailjs
      .sendForm(
        "service_oodki7q",
        "template_loc3ycc",
        form.current,
        "NR_WtzIv7s5yOO_ry"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  console.log(form.current)
  return (
    <div className="contact">
      <h2 className="projects__title" style={{ color: "white",paddingLeft:"3.5vw" }}>
        CONTACT
      </h2>
      <div className="contact__container">
        <div className="contact__images">
          <img
            src="/contactFormImages/face1.png"
            className="contact__images__face"
            alt="Лицо"/>
        </div>
        {isEmailSended == false ? (
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <input
              className="contact__form__field"
              type="text"
              name="user_name"
              placeholder="Name"
              autoComplete="off"
            />
            <input
              className="contact__form__field"
              type="email"
              name="user_email"
              placeholder="Email"
              autoComplete="off"
            />
            <textarea
              className="contact__form__field"
              name="message"
              placeholder="Message"
            />
            <input className="button-32" type="submit" value="Send" />
          </form>
        ) : (
          <div className="email__sended">
            <div class={`circle-loader load-complete`}>
              <div class={`checkmark draw`}></div>
            </div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
              className="email__sended__text"
            >
                Вам
              <motion.div
                initial={{ opacity: 0, left: "-20px" }}
                animate={{ opacity: 1, left: "0" }}
                transition={transitionYouSpan}
                className="email__sended__YouSpan"
              >
              </motion.div>{" "}
              понравится результат
            </motion.h1>
          </div>
        )}
      </div>
    </div>
  )
}
