import React from 'react'

import s from './Bio.module.css'
import profilePicture from './pp.png'
import ApparationContainer from '../ApparitionContainer'
import Title from '../Title'

const Bio = () => (
  <>
    <div className={s.container}>
      <Title>Présentation</Title>
      <div className={s.block}>
        <ApparationContainer duration={1}>
          <img src={profilePicture} alt="profile" className={s.img} />
        </ApparationContainer>
        <ApparationContainer delay={500} duration={1}>
          <div className={s.bio}>
            Hello ! moi c'est Tony. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi luctus neque urna, quis mattis diam egestas
            eu. Sed semper nibh arcu, ut congue tellus semper quis. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Aliquam sit amet mattis nunc, ac tincidunt ligula.
            Pellentesque turpis mauris, lobortis sit amet dictum dictum, sodales
            vitae enim. Nam vel gravida felis, accumsan tincidunt orci. Nunc
            congue nisi neque, et ullamcorper mauris eleifend in. Aliquam
            convallis velit urna, nec maximus nisl fringilla ac. Duis nec augue
            sit amet quam viverra maximus elementum in tortor. Vestibulum nec
            eleifend justo, nec faucibus mauris. Interdum et malesuada fames ac
            ante ipsum primis in faucibus. Nulla dictum auctor lectus nec
            feugiat.
          </div>
        </ApparationContainer>
      </div>
    </div>
  </>
)

export default Bio
