import React, { useEffect, useState } from 'react'

import * as sc from './styled'

export default function Skills() {

  const skills = [
    "React", "jQuery", "Vue", "Node.js", "Express", "Next.js", "Three.js"
  ]

  return (
    <sc.MainWrapper>
      My favorite frameworks are: 
      <br/>
      {skills.map(e => 
        skills.indexOf(e) < skills.length - 2 ? e + ', ' : 
        skills.indexOf(e) < skills.length - 1 ? e + ' and ' : 
        e
      )};
      <br/>
      <br/>
      But I&apos;m open for new things.
    </sc.MainWrapper>
  )
}