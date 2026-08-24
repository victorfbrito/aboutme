import React, { useContext, useEffect, useRef, useState } from "react";
import { MouseContext } from "../../context/mouse-context";
import { projects } from "../../assets/projects_info";

import * as sc from "./styled";

export default function WorkAnimation() {
  const { hoverObject } = useContext(MouseContext);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 851px)");
    const sync = () => setShouldLoad(desktop.matches);
    sync();
    desktop.addEventListener("change", sync);
    return () => desktop.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([src, video]) => {
      if (!video) return;
      if (hoverObject?.animation_src === src) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [hoverObject, shouldLoad]);

  return (
    <sc.MainWrapper>
      <sc.BgFrame proj={hoverObject} />
      <sc.ActiveFrame proj={hoverObject}>
        {projects.map((project) => {
          const isActive = hoverObject?.animation_src === project.animation_src;
          return (
            <video
              key={project.animation_src}
              ref={(el) => {
                videoRefs.current[project.animation_src] = el;
              }}
              muted
              loop
              playsInline
              preload={shouldLoad ? "auto" : "none"}
              poster={`/${project.animation_poster}`}
              data-active={isActive}
            >
              {shouldLoad && (
                <source src={`/${project.animation_src}`} type="video/mp4" />
              )}
            </video>
          );
        })}
      </sc.ActiveFrame>
    </sc.MainWrapper>
  );
}
