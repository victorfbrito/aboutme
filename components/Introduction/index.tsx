import React from "react";

import B from "../ActionButton";
import LanguageMenu from "../LanguageMenu";

import * as sc from "./styled";

export default function Introduction() {
  return (
    <sc.MainWrapper>
      <LanguageMenu />
      <sc.Title>
        <span>Software</span>
        <span>Engineer</span>
        <span>Portfolio</span>
      </sc.Title>
      <sc.Subtitle>
        <B href="/resume.pdf">Open to work</B>
      </sc.Subtitle>
    </sc.MainWrapper>
  );
}
