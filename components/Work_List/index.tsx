import React, { useEffect, useState, useContext } from "react";
import { MouseContext } from "../../context/mouse-context";

import { projects } from "../../assets/projects_info";

import * as sc from "./styled";

export default function WorkList() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const work_list = ["Browser Extension", "Wiki Redesign"];

  return (
    <sc.MainWrapper>
      {projects.map((e, i) => (
        <sc.Item
          key={i}
          href={e.url}
          target="_blank"
          onMouseEnter={() => cursorChangeHandler("redirect", "", e)}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          {e.list_name}
        </sc.Item>
      ))}
    </sc.MainWrapper>
  );
}
