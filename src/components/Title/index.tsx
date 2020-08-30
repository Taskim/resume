import React, { ReactNode } from 'react'

import s from './Title.module.css'

type Props = {
  children: ReactNode
}

const Title = ({ children }: Props) => (
  <h1 className={s.container}>{children}</h1>
)

export default Title
