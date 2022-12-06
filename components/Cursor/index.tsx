import React, { useContext, useEffect } from "react";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/mouse-context";

import * as sc from './styled'

export default function Cursor() {
  const { cursorType, cursorLabel, cursorChangeHandler } = useContext(MouseContext);
  const { x, y } = useMousePosition();

  function labelPos(posX: number, posY: number) {
    var _x = 0
    var _y = 0
    
    if (y && y > (window.innerHeight/2)) {
      _y +=1
      }
  
    if (x && x > (window.innerWidth/2)) {
      _x +=1
    }
    return {x: _x, y: _y}
  }

  return (
    <>
      <sc.Ring
        style={{ left: `${x}px`, top: `${y}px` }}
        cursorType={cursorType}
      ></sc.Ring>
      <sc.Dot
        style={{ left: `${x}px`, top: `${y}px` }}
        cursorType={cursorType}
      ></sc.Dot>
      <sc.Indicator width={20} height={20}
        style={{ left: `${x - 10}px`, top: `${y - 10}px`}}
        rel_pos={labelPos(x || 0, y || 0)}
        cursorType={cursorType}
      />
    </>
  );
};