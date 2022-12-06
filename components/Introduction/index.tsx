import React from "react"

import B from '../ActionButton'

import * as sc from './styled'

export default function Introduction() {

  return (
    <sc.MainWrapper>
      <sc.Title>
        <span>
          Front-End
        </span>
        <span>
          Developer
        </span>
        <span>
         Portfolio
        </span>
      </sc.Title>
      <sc.Subtitle>
        <B href="/resume.pdf">Open to work</B>
      </sc.Subtitle>
    </sc.MainWrapper>
  )
}