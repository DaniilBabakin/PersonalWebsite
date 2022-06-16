import "../../styles/projects.scss"
import {
  motion,
  useViewportScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion"
import { useWindowSize } from "../../hooks/useWindowSize"
import { InstagramClone } from "./projectsCards/instagramClone"
import { Scrollbar } from "smooth-scrollbar-react"
import { OpticaVzor } from "./projectsCards/opticaVzor"

export default function Projects() {
  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }
  //Отслеживание размеров окна для применения эффектов
  const size = useWindowSize()
  const scrollStart = size.height * 0.5
  const scrollAmount = size.height > 900 ? size.height : size.height * 0.8
  const { scrollYProgress, scrollY } = useViewportScroll()
  const filter = useTransform(
    scrollY,
    [scrollStart, scrollAmount],
    ["blur(15px)", "blur(0px)"]
  )
  const opacity = useTransform(scrollY, [scrollStart, scrollAmount], [0, 1])

  const scrollContainer = document.querySelector(`.projects__container`);
  const body = document.body
  scrollContainer && scrollContainer.addEventListener(`wheel`, (evt) => {
    evt.preventDefault();
    
    //check if you are at the end of horizontal scroll here
    if (
      scrollContainer.scrollWidth - scrollContainer.clientWidth ===
      scrollContainer.scrollLeft &&
      Math.sign(evt.deltaY) === 1
    ) {
      body.scrollTop += evt.deltaY;
      return;
    }
  
    //Horizontal scroll code here
    scrollContainer.scrollLeft += evt.deltaY;
  
  });

  return (
    <>
      <motion.div className="projects" style={{ filter, opacity }} exit={{opacity:0}} transition={{duration:50,...transition}}>
        <motion.h1 className="projects__title">PROJECTS</motion.h1>
          <motion.div className="projects__container">
            <InstagramClone />
            <OpticaVzor />
            <InstagramClone />
          </motion.div>
      </motion.div>
    </>
  )
}
