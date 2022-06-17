import { useState,useEffect } from 'react'
import '../styles/main.scss'
import styled from 'styled-components';
import Projects from '../components/projects/projects';
import { MainSection } from '../components/mainSection';
import { Footer } from '../components/footer/footer';
import SkillsParralax from '../components/parralax/parralax';

export default function Main(){
  
  
  return(
    <div>
      <MainSection/>
      <Projects/>
      <SkillsParralax/>
      <Footer/>
    </div>
  )
}