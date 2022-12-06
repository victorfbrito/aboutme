import React, { useEffect, useState, useContext } from 'react'
import { MouseContext } from "../../context/mouse-context";

import * as sc from './styled'

export default function HorizontalGuide({ scrollTo, dist, label }: any) {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
  return (
    <sc.MainWrapper
      dist={dist}
      onClick={() => scrollTo()}
      onMouseEnter={() => cursorChangeHandler("hovered", "")}
      onMouseLeave={() => cursorChangeHandler("")}
      label={label}
    />
  )
}