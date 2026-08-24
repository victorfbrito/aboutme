import React, { useEffect, useMemo, useState } from "react";

import B from "../ActionButton";
import LanguageMenu from "../LanguageMenu";

import * as sc from "./styled";

const LINES = ["Software", "Engineer", "Portfolio"];
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function shuffle<T>(items: T[]) {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export default function Introduction() {
  const letters = useMemo(
    () => LINES.map((line) => line.toUpperCase().split("")),
    []
  );
  const [frames, setFrames] = useState(() =>
    letters.map((line) => line.map(() => ""))
  );
  const [locked, setLocked] = useState(() =>
    letters.map((line) => line.map(() => false))
  );
  const [active, setActive] = useState(() =>
    letters.map((line) => line.map(() => false))
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setFrames(letters);
      setLocked(letters.map((line) => line.map(() => true)));
      setActive(letters.map((line) => line.map(() => true)));
      return;
    }

    const coords: Array<[number, number]> = [];
    letters.forEach((line, i) => {
      line.forEach((_, j) => coords.push([i, j]));
    });
    const order = shuffle(coords);
    const revealed = new Set<string>();
    const lockedKeys = new Set<string>();
    const keyOf = (i: number, j: number) => `${i}-${j}`;
    const lockTimers: number[] = [];
    let revealIdx = 0;

    const scrambleTick = window.setInterval(() => {
      setFrames((prev) =>
        letters.map((line, i) =>
          line.map((ch, j) => {
            const key = keyOf(i, j);
            if (lockedKeys.has(key)) return ch;
            if (!revealed.has(key)) return "";
            return randomGlyph();
          })
        )
      );
    }, 24);

    const revealTick = window.setInterval(() => {
      if (revealIdx >= order.length) {
        window.clearInterval(revealTick);
        return;
      }

      const [i, j] = order[revealIdx];
      revealIdx += 1;
      const key = keyOf(i, j);
      revealed.add(key);

      setActive((prev) => {
        const next = prev.map((row) => [...row]);
        next[i][j] = true;
        return next;
      });

      lockTimers.push(
        window.setTimeout(() => {
          lockedKeys.add(key);
          setLocked((prev) => {
            const next = prev.map((row) => [...row]);
            next[i][j] = true;
            return next;
          });
          setFrames((prev) => {
            const next = prev.map((row) => [...row]);
            next[i][j] = letters[i][j];
            return next;
          });
        }, 200 + Math.floor(Math.random() * 100))
      );
    }, 29);

    return () => {
      window.clearInterval(scrambleTick);
      window.clearInterval(revealTick);
      lockTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [letters]);

  return (
    <sc.MainWrapper>
      <LanguageMenu />
      <sc.Title aria-label="Software Engineer Portfolio">
        {letters.map((line, i) => (
          <span key={LINES[i]} aria-hidden="true">
            {line.map((ch, j) => (
              <sc.Char key={`${ch}-${j}`}>
                <sc.Ghost>{ch}</sc.Ghost>
                <sc.Face $locked={locked[i][j]} $active={active[i][j]}>
                  {frames[i][j]}
                </sc.Face>
              </sc.Char>
            ))}
          </span>
        ))}
      </sc.Title>
      <sc.Subtitle>
        <B href="/resume.pdf">Open to work</B>
      </sc.Subtitle>
    </sc.MainWrapper>
  );
}
