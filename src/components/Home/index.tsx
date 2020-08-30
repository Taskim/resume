import React from 'react'

import Particles from './Particles'
import s from './Home.module.css'
import student from '../../student.svg'
import ApparationContainer from '../ApparitionContainer'

const Home = () => {
  return (
    <div className={s.container}>
      <Particles />
      <ApparationContainer duration={1} opacity={0.7}>
        <img src={student} alt="student" className={s.student} />
      </ApparationContainer>
      <ApparationContainer delay={500} duration={1}>
        <div className={s.name}>{'<Taskim />'}</div>
      </ApparationContainer>
    </div>
  )
}

export default Home
