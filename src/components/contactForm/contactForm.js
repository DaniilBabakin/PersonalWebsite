import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "./contactForm.scss"
import { motion } from "framer-motion"
import { Formik, Form, Field } from "formik"
import * as yup from "yup"

export const ContactForm = () => {
  const transition = {
    delay: 0.5,
    duration: 1.3,
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const transitionYouSpan = {
    delay: 1.5,
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96],
  }
  const [isEmailSended, setIsEmailSended] = useState(false)
  const form = useRef()
  const schema = yup.object().shape({
    name: yup.string().required("Введите Ваше имя"),
    email: yup
      .string()
      .email("Введен некорректный email")
      .required("Введите Ваш email"),
    message: yup.string().required("Может что-нибудь напишете?..."),
  })
  const sendEmail = (e) => {
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
  return (
    <div className="contact">
      <h2
        className="projects__title"
        style={{ color: "white", paddingLeft: "3.5vw" }}
      >
        CONTACT
      </h2>
      <div className="contact__container">
        <div className="contact__images">
          <img
            src="/contactFormImages/face1.png"
            className="contact__images__face"
            alt="Лицо"
          />
        </div>

        {isEmailSended === false ? (
          <Formik
            initialValues={{
              name: undefined,
              email: undefined,
              message: undefined,
            }}
            enableReinitialize
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
              sendEmail()
            }}
          >
            {({
              isSubmitting,
              values,
              initialValues,
              handleSubmit,
              setFieldValue,
              handleChange,
              status,
              touched,
              errors,
              isValidating,
            }) => (
              <Form
                ref={form}
                className="contact__form"
                style={{ position: "relative" }}
              >
                <div style={{ width: "100%", position: "relative" }}>
                  <Field
                    className="contact__form__field"
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    value={values.name || ""}
                    onChange={(selected: any, e: any) => {
                      setFieldValue(
                        "name",
                        selected === null ? "" : selected.target.value
                      )
                    }}
                  />
                  {errors.name && touched.name ? (
                    <div
                      style={{
                        position: "absolute",
                        left: "5px",
                        bottom: "-25px",
                      }}
                    >
                      {errors.name}
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    width: "100%",
                    marginTop: "33px",
                    position: "relative",
                  }}
                >
                  <Field
                    className="contact__form__field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    value={values.email || ""}
                    onChange={(selected: any, e: any) => {
                      setFieldValue(
                        "email",
                        selected === null ? "" : selected.target.value
                      )
                    }}
                  />
                  {errors.email && touched.email ? (
                    <div
                      style={{
                        position: "absolute",
                        left: "5px",
                        bottom: "-25px",
                      }}
                    >
                      {errors.email}
                    </div>
                  ) : null}
                </div>
                <div
                  style={{
                    width: "100%",
                    marginTop: "33px",
                    position: "relative",
                  }}
                >
                  <Field
                    as="textarea"
                    className="contact__form__field"
                    name="message"
                    placeholder="Message"
                    value={values.message || ""}
                    onChange={(selected: any, e: any) => {
                      setFieldValue(
                        "message",
                        selected === null ? "" : selected.target.value
                      )
                    }}
                  />
                  {errors.message && touched.message ? (
                    <div
                      style={{
                        position: "absolute",
                        left: "5px",
                        bottom: "-25px",
                      }}
                    >
                      {errors.message}
                    </div>
                  ) : null}
                </div>
                <button className="button-32" type="submit">
                  Send
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="email__sended">
            <div className={`circle-loader load-complete`}>
              <div className={`checkmark draw`}></div>
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
              ></motion.div>{" "}
              понравится результат
            </motion.h1>
          </div>
        )}
      </div>
    </div>
  )
}
