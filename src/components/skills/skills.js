import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse"
import "./skills.scss"

export default function SkillsParralax() {
  return (
    <div className="skills">
      <MouseParallaxContainer
        className="skills__container"
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.1}
          className="skills__background"
        />

        {/*----------------------------------------------НАВЫКИ----------------------------------------------- */}
        {/*--------------------ПЕРВЫЙ---------------------*/}
          <MouseParallaxChild
            factorX={0.05}
            factorY={0.05}
            className="skills__item__wrapper"
          >
            <img
              height="50%"
              src="/skillsIcons/react.svg"
              alt=""
              className="skills__item first"
            />
          </MouseParallaxChild>

          {/*--------------------ВТОРОЙ---------------------*/}
          <MouseParallaxChild
            factorX={0.07}
            factorY={0.05}
            className="skills__item__wrapper"
          >
            <img
              height="50%"
              src="/skillsIcons/node.svg"
              alt=""
              className="skills__item second"
            />
          </MouseParallaxChild>

          {/*--------------------ТРЕТИЙ---------------------*/}
          <MouseParallaxChild
            factorX={0.09}
            factorY={0.05}
            className="skills__item__wrapper"
          >
            <img
              height="50%"
              src="/skillsIcons/typescript.svg"
              alt=""
              className="skills__item third"
            />
          </MouseParallaxChild>

          {/*--------------------ЧЕТВЕРТЫЙ---------------------*/}
          <MouseParallaxChild
            factorX={0.07}
            factorY={0.05}
            className="skills__item__wrapper"
          >
            <img
              height="50%"
              src="/skillsIcons/tailwind.svg"
              alt=""
              className="skills__item fourth"
            />
          </MouseParallaxChild>

          {/*--------------------ПЯТЫЙ---------------------*/}
          <MouseParallaxChild
            factorX={0.05}
            factorY={0.05}
            className="skills__item__wrapper"
          >
            <img
              height="50%"
              src="/skillsIcons/redux.svg"
              alt=""
              className="skills__item fifth"
            />
          </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  )
}
