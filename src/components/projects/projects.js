import "../../styles/projects.scss"
import { motion } from "framer-motion"
import { InstagramClone } from "./projectsCards/instagramClone"
import { OpticaVzor } from "./projectsCards/opticaVzor"
import { TennisCenter } from "./projectsCards/tennisCenter"

export default function Projects() {
  return (
    <motion.div
      className="projects"
    >
      <motion.h1 className="projects__title">PROJECTS</motion.h1>
      <motion.div className="projects__container">
        <TennisCenter/>
        <InstagramClone />
        <OpticaVzor />
      </motion.div>
    </motion.div>
  )
}
