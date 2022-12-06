import React, { useEffect, useState, useContext } from 'react'
import { MouseContext } from "../../context/mouse-context"
import Image from 'next/image'

import * as sc from './styled'

interface Project {
  index: number
  git_name: string
  list_name: string
  about: string
  tech: string[]
  animation_src: string
}


export default function WorkAnimation() {
  const { hoverObject } = useContext(MouseContext);
  const [proj, setProj] = useState<Project | null>(hoverObject)
  
  useEffect(() => {
    setProj(hoverObject)
  }, [hoverObject])

  return (
    <sc.MainWrapper>
      <sc.BgFrame proj={proj}/>
      <sc.ActiveFrame proj={proj}>
        {proj &&
        <video autoPlay loop >
          <source src={`/${proj?.animation_src}`} />
        </video>
        }
      </sc.ActiveFrame>
    </sc.MainWrapper>
  )
}