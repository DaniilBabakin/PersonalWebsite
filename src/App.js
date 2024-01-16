import React, { lazy, Suspense } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { AnimatePresence } from "framer-motion"

const Main = lazy(() => import("./pages/main"))
const AboutPage = lazy(() => import("./pages/aboutMe"))
const InstagramClone = lazy(() => import("./pages/instagramClonePage"))
const OpticaVzor = lazy(() => import("./pages/opticaVzorPage"))
const TennisCenter = lazy(() => import("./pages/tennisCenterPage"))


function App() {
  const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty("--app-height", `${window.innerHeight}px`)
  }
  window.addEventListener("resize", appHeight)
  appHeight()
  const location = useLocation()
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.ABOUT_ME} element={<AboutPage />} />
          <Route path={ROUTES.INSTAGRAMCLONE} element={<InstagramClone />} />
          <Route path={ROUTES.OPTICAVZOR} element={<OpticaVzor />} />
          <Route path={ROUTES.TENNISCENTER} element={<TennisCenter />} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
