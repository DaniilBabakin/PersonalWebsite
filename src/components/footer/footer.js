import React from "react"
import '../../styles/footer.scss'
export const Footer = () => {
  return (
    <footer className="instagram__footer">
      <div className="instagram__footer__contact">
        <span className="instagram__footer__suptitle">
          Если выбирать качество
        </span>
        <a
          href="mailto:rrdreaming@mail.ru"
          className="instagram__footer__email"
        >
          rrdreaming@mail.ru
        </a>
      </div>
    </footer>
  )
}
