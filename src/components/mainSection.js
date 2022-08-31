import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MainSection = ({canScroll,setCanScroll}) => {
  const transition = {duration:2,ease:[0,0.2,0.6,1]}
  
  useEffect(() => {
    if(canScroll === true){
      document.querySelector('body').classList.add('no-scroll-hover')
    } else {
      document.querySelector('body').classList.remove('no-scroll-hover')
    }
  }, [canScroll])
  return (
    <div className="main">
      <div className="main__container">
        <motion.p onAnimationComplete={()=>setCanScroll(false)} initial={{x:-300,opacity:0}} animate={{x:0,opacity:1,transition:transition}} className="main__text">Привет,я <span className="text__color text__white span_me">ДАНИИЛ.</span></motion.p>
        <motion.p initial={{x:-350,opacity:0}} animate={{x:0,opacity:1,transition:{delay:0.05,duration:1.5,...transition}}} className="main__text">Занимаюсь<br/><span className="text__color text__yellow span_frontend"> FRONTEND РАЗРАБОТКОЙ</span></motion.p>
        <motion.p initial={{x:-450,opacity:0}} animate={{x:0,opacity:1,transition:{delay:0.2,duration:1.6,...transition}}} className="main__text">Параллельно изучаю<span className="text__color text__white span_ui"> UX/UI DESIGN</span></motion.p>
        <motion.p initial={{x:-500,opacity:0}} animate={{x:0,opacity:1,transition:{delay:0.5,duration:1.8,...transition}}} className="main__text">Позиция<span className="text__color text__white"> JUNIOR </span> в компании <span className="text__color text__white">СНПО ЭЛЕРОН</span></motion.p>
      </div>
    </div>
  )
}

