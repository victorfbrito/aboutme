import React, { useContext, useEffect, useRef, useState } from "react";
import { MouseContext } from "../../context/mouse-context";
import { projects } from "../../assets/projects_info";
import useMousePosition from "../../hooks/useMousePosition";

import * as sc from "./styled";

export default function WorkCursorVideo() {
  const { hoverObject } = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const tabletPreview = window.matchMedia(
      "(min-width: 851px) and (max-width: 1024px) and (hover: hover)"
    );
    const sync = () => setShouldLoad(tabletPreview.matches);
    sync();
    tabletPreview.addEventListener("change", sync);
    return () => tabletPreview.removeEventListener("change", sync);
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

  if (!shouldLoad) return null;

  return (
    <sc.Wrapper
      $visible={!!hoverObject}
      style={{ left: `${x ?? 0}px`, top: `${y ?? 0}px` }}
    >
      {projects.map((project) => {
        const isActive = hoverObject?.animation_src === project.animation_src;
        return (
          <sc.Video
            key={project.animation_src}
            ref={(el) => {
              videoRefs.current[project.animation_src] = el;
            }}
            muted
            loop
            playsInline
            preload="auto"
            poster={`/${project.animation_poster}`}
            data-active={isActive}
          >
            <source src={`/${project.animation_src}`} type="video/mp4" />
          </sc.Video>
        );
      })}
    </sc.Wrapper>
  );
}
