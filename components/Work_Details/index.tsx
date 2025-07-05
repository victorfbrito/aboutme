import React, { useContext, useEffect, useState } from "react";
import { MouseContext, Project } from "../../context/mouse-context";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function WorkDetails() {
  const { hoverObject } = useContext(MouseContext);
  const [proj, setProj] = useState<Project | null>(hoverObject);
  const { t } = useTranslation();

  useEffect(() => {
    setProj(hoverObject);
  }, [hoverObject]);

  return (
    <sc.MainWrapper proj={proj}>
      {proj && (
        <>
          <sc.Title>{proj.git_name}</sc.Title>
          <sc.Text>{t(proj.aboutKey)}</sc.Text>
          <sc.Tech>
            {proj.tech.map((e) => (
              <li key={proj.tech.indexOf(e)}>{e}</li>
            ))}
          </sc.Tech>
        </>
      )}
    </sc.MainWrapper>
  );
}
