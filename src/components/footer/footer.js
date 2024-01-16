import React from "react"
import "../../styles/footer.scss"
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact">
          <span className="footer__suptitle">Next level</span>
          <a href="mailto:rrdreaming0224@gmail.com" className="footer__email">
            rrdreaming0224@gmail.com
          </a>
        </div>
        <div className="footer__links">
          <div className="footer__link__div">
            <a
              href="https://github.com/DaniilBabakin"
              rel="noreferrer"
              target="_blank"
              className="footer__link"
            >
              <img
                src={require("../../assets/Github.png")}
                alt="GitHub"
                className="footer__link__icon"
              />
              <span className="footer__link__span">Me on GitHub</span>
            </a>
          </div>

          <div className="footer__link__div">
            <a
              href="https://t-do.ru/DaniilBabakin"
              rel="noreferrer"
              target="_blank"
              className="footer__link"
            >
              <img
                src={require("../../assets/tg.png")}
                alt="GitHub"
                className="footer__link__icon"
              />
              <span className="footer__link__span">My Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
