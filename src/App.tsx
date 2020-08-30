import React, { useRef } from 'react'

import Home from './components/Home'
import Bio from './components/Bio'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import s from './App.module.css'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={s.app} ref={containerRef}>
      <div className={s.page}>
        <Home />
      </div>
      <div className={s.page}>
        <Bio />
      </div>
      <div className={s.page}>
        <Experiences />
      </div>
      <div className={s.page}>
        <Projects />
      </div>
    </div>
  )
}

export default App
