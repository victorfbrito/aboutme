import React, { useEffect, useState, useContext } from 'react'
import { MouseContext } from "../../context/mouse-context";

import works from '../../assets/projects_info.json'

import * as sc from './styled'

export default function WorkList() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const work_list = ["Browser Extension", "Wiki Redesign"]

  return (
    <sc.MainWrapper>
      {works.map(e => 
        <sc.Item key={works.indexOf(e)} href={e.url} target="_blank"
        onMouseEnter={() => cursorChangeHandler("redirect", "", e)}
        onMouseLeave={() => cursorChangeHandler("")}>
          {e.list_name}
        </sc.Item>)}
    </sc.MainWrapper>
  )
}