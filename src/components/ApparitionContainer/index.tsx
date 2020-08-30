import React, { FunctionComponent } from 'react'
import { useInView } from 'react-intersection-observer'
import cx from 'classnames'

import s from './ApparitionContainer.module.css'

type Props = {
  children: React.ReactNode
  duration?: number
  delay?: number
  opacity?: number
}

const ApparitionContainer: FunctionComponent<Props> = ({
  children,
  duration = 1,
  delay = 0,
  opacity = 1,
}) => {
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  })

  return (
    <div
      className={cx(s.container)}
      style={{
        transition: `all ${duration}s ease ${delay}ms`,
        opacity: inView ? opacity : 0,
        transform: inView ? 'translate3d(0, 30px, 0)' : 'translate3d(0, 0, 0)',
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default ApparitionContainer
