import React from 'react'

import s from './Experiences.module.css'
import sg from './sg.png'
import etna from './etna.png'
import hairfie from './hairfie.svg'
import evaneos from './evaneos.svg'
import Title from '../Title'

const Experiences = () => (
  <div className={s.container}>
    <Title>Expériences</Title>
    <div className={s.timeline}>
      <div className={s.line} />
      <div className={s.points}>
        <div className={s.up} />
        <div className={s.point}>
          <div className={s.point}>
            <img alt="logo" className={s.logo} src={evaneos} />
          </div>
        </div>
        <div className={s.pointContainer}>
          <div className={s.point}>
            <img alt="logo" style={{ height: 27, width: 27 }} src={hairfie} />
          </div>
        </div>
        <div className={s.pointContainer}>
          <div className={s.point}>
            <img alt="logo" style={{ height: 8, width: 27 }} src={etna} />
          </div>
        </div>
        <div className={s.pointContainer}>
          <div className={s.point}>
            <img alt="logo" className={s.logo} src={sg} />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Experiences
