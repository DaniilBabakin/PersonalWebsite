import '../styles/main.scss'
import Projects from '../components/projects/projects';
import { MainSection } from '../components/mainSection';
import { Footer } from '../components/footer/footer';
import SkillsParralax from '../components/skills/skills';
import { ContactForm } from '../components/contactForm/contactForm';
import Header from '../components/header/header';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

export default function Main(){
  const [headerActive,setActiveHeader] = useState(false) //Состояние Header'a (закрыт/открыт)
  const [canScroll,setCanScroll] = useState(true) //Состояние загрузки страницы(если загрузилась - скроллить можно)
  
  useEffect(() => {
    if(canScroll === true){
      document.querySelector('body').classList.add('no-scroll-hover')
    } else {
      document.querySelector('body').classList.remove('no-scroll-hover')
    }
  }, [canScroll])
  return(
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{opacity:0}}
        transition={{duration: 1.2}}
    >
      {/*Если user нажал на кнопку , то показываем Header*/}
      {headerActive === false ? <svg xmlns="http://www.w3.org/2000/svg" className="header__button" fill="#ffffff" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} onClick={() => {setActiveHeader(true);setCanScroll(true)}}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>  : <Header setActiveHeader={setActiveHeader} headerActive={headerActive} setCanScroll={setCanScroll}/>}
      
      <MainSection canScroll={canScroll} setCanScroll={setCanScroll}/>
      <Projects/>
      <SkillsParralax/>
      <ContactForm/>
      <Footer/>
    </motion.div>
  )
}