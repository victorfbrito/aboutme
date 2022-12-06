import React, { useState, useEffect, useContext } from 'react'
import { MouseContext } from "../../context/mouse-context";

import * as sc from './styled'

interface LetterProps {
  radius: number
  origin: number
  ea?: string
}

interface Case {
  text: string
}

const radius = 60

export default function Switch_button({ text }: Case) {
  const [letters, setLetters] = useState<LetterProps[]>([])
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  
  useEffect(() => {
    setLetters([])
    const letters = text.split("")
    var deg = 360 / text.length, origin = 0;
  
    letters.forEach((ea: string) => {
      const new_letter = {radius: radius, origin: origin, ea: ea}
      setLetters(prev => [...prev, new_letter])
      origin += deg;
    });
  }, [text])

  return (
    <sc.MainWrapper radius={radius}
      onMouseEnter={() => cursorChangeHandler("hovered", "Work together")}
      onMouseLeave={() => cursorChangeHandler("")}
      href={'/pdf_sample.pdf'}
      target="_blank"
      rel="noreferrer"
    >
      <sc.AnimationWrapper radius={radius} >
        <sc.circleText>
          {letters.map(l => 
            <sc.circleLetter key={letters.indexOf(l)} radius={l.radius} origin={l.origin}>{l.ea}</sc.circleLetter>
          )}
        </sc.circleText>
      </sc.AnimationWrapper>
    </sc.MainWrapper>
  )
}