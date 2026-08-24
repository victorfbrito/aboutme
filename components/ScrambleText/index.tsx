import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const LETTER = /[A-Za-z]/;

const Word = styled.span`
  position: relative;
  display: inline-block;
`;

const Ghost = styled.span`
  visibility: hidden;
  pointer-events: none;
`;

const Face = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  white-space: nowrap;
`;

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

export default function ScrambleText({
  text,
  play,
}: {
  text: string;
  play: boolean;
}) {
  const chars = text.split("");
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!play) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const order = shuffle(
      chars.map((_, i) => i).filter((i) => LETTER.test(chars[i]))
    );
    const revealed = new Set<number>();
    const lockedKeys = new Set<number>();
    const lockTimers: number[] = [];
    let revealIdx = 0;
    const current = chars.map((ch) => (LETTER.test(ch) ? "" : ch));

    chars.forEach((ch, i) => {
      if (!LETTER.test(ch)) lockedKeys.add(i);
    });
    setDisplay(current.join(""));

    const scrambleTick = window.setInterval(() => {
      setDisplay(
        chars
          .map((ch, i) => {
            if (lockedKeys.has(i)) return ch;
            if (!revealed.has(i)) return current[i] || " ";
            return randomGlyph();
          })
          .join("")
      );
    }, 36);

    const revealTick = window.setInterval(() => {
      if (revealIdx >= order.length) {
        window.clearInterval(revealTick);
        return;
      }
      const i = order[revealIdx];
      revealIdx += 1;
      revealed.add(i);
      lockTimers.push(
        window.setTimeout(() => {
          lockedKeys.add(i);
          current[i] = chars[i];
          setDisplay(
            chars
              .map((ch, idx) => {
                if (lockedKeys.has(idx)) return ch;
                if (!revealed.has(idx)) return " ";
                return randomGlyph();
              })
              .join("")
          );
        }, 400 + Math.floor(Math.random() * 200))
      );
    }, 87);

    return () => {
      window.clearInterval(scrambleTick);
      window.clearInterval(revealTick);
      lockTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [play, text]);

  return (
    <Word aria-label={text}>
      <Ghost>{text}</Ghost>
      <Face>{play ? display : ""}</Face>
    </Word>
  );
}
