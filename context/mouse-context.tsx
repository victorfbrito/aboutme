import React, { createContext, useState } from "react";

interface Project {
  index: number
  git_name: string
  list_name: string
  about: string
  tech: string[]
  animation_src: string
}

interface Mouse {
  cursorType: string,
  pageX: number,
  pageY: number,
  cursorLabel: string,
  hoverObject: Project | null,
  cursorChangeHandler: (cursorType: any, cursorLabel?: string, hoverObject?: Project | null) => void,
  cursorPositionHandler: (X: number, Y: number) => void
}

export const MouseContext = createContext<Mouse>({
  cursorType: "",
  pageX: 0,
  pageY: 0,
  cursorLabel: "",
  hoverObject: null,
  cursorChangeHandler: (cursorType: any, cursorLabel?: string, hoverObject?: Project | null) => {},
  cursorPositionHandler: (X: number, Y: number) => {}
});

const MouseContextProvider = (props: any) => {
  const [cursorType, setCursorType] = useState("");
  const [cursorLabel, setCursorLabel] = useState("");
  const [hoverObject, setHoverObject] = useState<Project | null>(null);
  const [pageX, setPageX] = useState(0);
  const [pageY, setPageY] = useState(0);

  const cursorChangeHandler = (cursorType: any, cursorLabel?:string, hoverObject?: Project | null) => {
    setCursorType(cursorType);
    setCursorLabel(cursorLabel || "");
    if (hoverObject) {
      setHoverObject(hoverObject);
    } else {
      setHoverObject(null);
    }
  };

  const cursorPositionHandler = (X: number, Y: number) => {
    setPageX(X)
    setPageY(Y)
  }

  return (
    <MouseContext.Provider
      value={{
        cursorType: cursorType,
        pageX: pageX,
        pageY: pageY,
        cursorLabel: cursorLabel,
        hoverObject: hoverObject,
        cursorChangeHandler: cursorChangeHandler,
        cursorPositionHandler: cursorPositionHandler
      }}
    >
      {props.children}
    </MouseContext.Provider>
  );
};

export default MouseContextProvider;
