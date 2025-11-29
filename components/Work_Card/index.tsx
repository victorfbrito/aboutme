import React, { useEffect, useState, useContext } from "react";
import { MouseContext, Project } from "../../context/mouse-context";

import * as sc from "./styled";

export default function WorkAnimation() {
  const { hoverObject } = useContext(MouseContext);
  const [proj, setProj] = useState<Project | null>(hoverObject);

  useEffect(() => {
    setProj(hoverObject);
  }, [hoverObject]);

  return (
    <sc.MainWrapper>
      <sc.BgFrame proj={proj} />
      <sc.ActiveFrame proj={proj}>
        {proj && (
          <video autoPlay loop muted playsInline preload="auto">
            <source src={`/${proj?.animation_src}`} />
          </video>
        )}
      </sc.ActiveFrame>
    </sc.MainWrapper>
  );
}
