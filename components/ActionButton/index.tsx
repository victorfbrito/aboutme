import React, { useEffect, useContext } from 'react'
import { MouseContext } from "../../context/mouse-context"

import * as sc from './styled'

interface ActionProps {
  children: string
  href: string
}

export default function Button({ children, href}: ActionProps) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <sc.MainWrapper href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => cursorChangeHandler("hovered", "")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      {children}
    </sc.MainWrapper>
  )
}