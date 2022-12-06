import React, { useContext, useEffect, useState } from 'react'
import { MouseContext } from "../../context/mouse-context"

import p_info from '../../assets/projects_info.json'

import * as sc from './styled'

interface Project {
  index: number
  git_name: string
  list_name: string
  about: string
  tech: string[]
  animation_src: string
}


const p = p_info[0]

export default function WorkDetails() {
  const { cursorType, hoverObject, cursorChangeHandler } = useContext(MouseContext);
  const [proj, setProj] = useState<Project | null>(hoverObject)
  useEffect(() => {
    setProj(hoverObject)
  }, [hoverObject])

  return (
    <sc.MainWrapper proj={proj}>
      {proj &&
        <>
          <sc.Title>
            {proj.git_name}
          </sc.Title>
          <sc.Text>
            {proj.about}
          </sc.Text>
          <sc.Tech>
            {proj.tech.map(e => <li key={proj.tech.indexOf(e)}>{e}</li>)}
          </sc.Tech>
        </>
      }
    </sc.MainWrapper>
  )
}