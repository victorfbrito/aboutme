import React, { useEffect, useState } from "react";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    "React",
    "jQuery",
    "Vue",
    "Node.js",
    "Express",
    "Next.js",
    "Three.js",
  ];

  return (
    <sc.MainWrapper>
      {t("about.stack")}
      <br />
      {skills.map((e) =>
        skills.indexOf(e) < skills.length - 2
          ? e + ", "
          : skills.indexOf(e) < skills.length - 1
          ? e + " and "
          : e
      )}
      ;
      <br />
      <br />
      {t("about.learning")}
    </sc.MainWrapper>
  );
}
