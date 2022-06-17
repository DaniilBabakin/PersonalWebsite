import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse"
import "./parralax.scss"

export default function SkillsParralax() {
  return (
      <div
      
        style={{
          height: "100%",
          position:"relative",
          zIndex:"100",
          width: "100%",
          color: "#fff",
          overflow: "hidden",
        }}
      >
          <h1 className="parralax__title">
            SKILLS
          </h1>
          <MouseParallaxContainer
            className="parallax"
            containerStyles={{
              height: "70vh",
              width: "100vw",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto auto",
            }}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.03}
              factorY={0.1}
              className="parralax__background"
            />



{/*----------------------------------------------НАВЫКИ----------------------------------------------- */}
            {/*--------------------ПЕРВЫЙ---------------------*/}
            <MouseParallaxChild
              factorX={0.05}
              factorY={0.05}
              className="parralax__item__wrapper"
            >
              <img
                height="50%"
                src="/skillsIcons/react.svg"
                alt=""
                className="parralax__item first"
              />
            </MouseParallaxChild>

          
            {/*--------------------ВТОРОЙ---------------------*/}
            <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              className="parralax__item__wrapper"
            >
              <img
                height="50%"
                src="/skillsIcons/node.svg"
                alt=""
                className="parralax__item second"
              />
            </MouseParallaxChild>

            {/*--------------------ТРЕТИЙ---------------------*/}
            <MouseParallaxChild
              factorX={0.09}
              factorY={0.05}
              className="parralax__item__wrapper"
            >
              <img
                height="50%"
                src="/skillsIcons/typescript.svg"
                alt=""
                className="parralax__item third"
              />
            </MouseParallaxChild>

            {/*--------------------ЧЕТВЕРТЫЙ---------------------*/}        
            <MouseParallaxChild
              factorX={0.07}
              factorY={0.05}
              className="parralax__item__wrapper"
            >
              <img
                height="50%"
                src="/skillsIcons/tailwind.svg"
                alt=""
                className="parralax__item fourth"
              />
            </MouseParallaxChild>

            {/*--------------------ПЯТЫЙ---------------------*/}  
            <MouseParallaxChild
              factorX={0.05}
              factorY={0.05}
              className="parralax__item__wrapper"
            >
              <img
                height="50%"
                src="/skillsIcons/redux.svg"
                alt=""
                className="parralax__item fifth"
              />
            </MouseParallaxChild>
          </MouseParallaxContainer>
      </div>
  )
}
