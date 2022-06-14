import React, { lazy, Suspense, useEffect, useRef } from "react";
import Header from "./components/header/header";
import Projects from "./components/projects/projects";

import Main from "./pages/main";


function App() {
  const scrollbar = useRef(null);
  return (  
    <div className="App">
        <Main/>
        <Projects/>
    </div>
  );
}

export default App;
