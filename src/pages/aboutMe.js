import React from "react"
import '../styles/aboutMe.scss'
export default function AboutPage() {
  return (
    <div className="about">
      <h1>Обо мне</h1>
     <div className="about__container">
      <img src={require('../assets/AboutMe.jpg')} className="about__img"/>
      <p className="about__text">Тут будет текст обо мне,какой я хороший и тд и тп</p>
     </div>
    </div>
  )
}
