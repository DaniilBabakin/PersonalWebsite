import React from "react"
import ProgressiveImage from "react-progressive-image"
import { motion } from "framer-motion"
import "../styles/singleProject.scss"

export default function InstagramClonePage() {
  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }
  return (
    <div className="single__project">
      <motion.h1 className="single__project__title" initial={{opacity:0,scale:1.1}} animate={{opacity:1,scale:1}} transition={{delay:1,...transition}}>INSTAGRAM CLONE</motion.h1>
      <ProgressiveImage
        src={require("../assets/ic3.jpg")}
        placeholder={require("../assets/ic3.jpg")}
      >
        {(src) => (
          <motion.img
            src={src}
            alt="aboba"
            className="single__project__image"
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={transition}
          />
        )}
      </ProgressiveImage>
    </div>
  )
}
