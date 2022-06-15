import React, { lazy, Suspense } from "react"
import Header from "./components/header/header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import * as ROUTES from "./constants/routes"
import { AnimatePresence } from "framer-motion"

const Main = lazy(() => import("./pages/main"))
const InstagramClone = lazy(() => import("./pages/instagramClonePage"))

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.INSTAGRAMCLONE} element={<InstagramClone />} />
        </Routes>
        </AnimatePresence>
      </Suspense>
    </Router>
  )
}

export default App
