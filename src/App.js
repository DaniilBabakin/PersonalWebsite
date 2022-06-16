import React, { lazy, Suspense } from "react"
import Header from "./components/header/header"
import { BrowserRouter as Router, Routes, Route,useLocation } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { AnimatePresence } from "framer-motion"
import ScrollToTop from "./hooks/scrollToTop"

const Main = lazy(() => import("./pages/main"))
const InstagramClone = lazy(() => import("./pages/instagramClonePage"))

function App() {
  const location = useLocation();
  return (
      <Suspense fallback={<p>Loading...</p>}>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.INSTAGRAMCLONE} element={<InstagramClone />} />
        </Routes>
        </AnimatePresence>
      </Suspense>
  )
}

export default App
