import React, { useEffect, useState } from "react";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function Skills({ commits }: { commits: number }) {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const duration = 5000;

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
      ; and I have {count} commits hosted on GitHub.
      <br />
      <br />
      {t("about.learning")}
    </sc.MainWrapper>
  );
}
