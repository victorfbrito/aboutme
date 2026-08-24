import React, { useEffect, useRef, useState } from "react";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";
import ScrambleText from "../ScrambleText";

const SKILLS = ["Node.js", "React", "Python", "TypeScript", "AWS"];

export default function Skills({ commits }: { commits: number }) {
  const [count, setCount] = useState(0);
  const [play, setPlay] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const duration = 5000;

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const startValue = Math.floor(commits / 1.5);

    function easeOutQuad(t: number) {
      return t * (2 - t);
    }

    function step(timestamp: number) {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);
      const currentCount = Math.floor(
        startValue + easedProgress * (commits - startValue)
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(commits);
      }
    }

    requestAnimationFrame(step);
  }, [commits, duration]);

  return (
    <sc.MainWrapper ref={wrapperRef}>
      {t("about.stack")}
      <br />
      {SKILLS.map((skill, i) => (
        <React.Fragment key={skill}>
          <ScrambleText text={skill} play={play} />
          {i < SKILLS.length - 2 ? ", " : i < SKILLS.length - 1 ? ` ${t("and")} ` : ""}
        </React.Fragment>
      ))}
      ; {count > 0 && t("github_info", { count: count })}
      <br />
      <br />
      {t("about.learning")}
    </sc.MainWrapper>
  );
}
