import React, { useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../constants/languages";
import * as sc from "./styled";
import { MouseContext } from "../../context/mouse-context";

export default function LanguageMenu() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { cursorChangeHandler } = useContext(MouseContext);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  const handleMouseOver = (enter: boolean) => {
    if (enter) {
      cursorChangeHandler("hovered", "");
      setOpen(true);
    } else {
      cursorChangeHandler("");
      setOpen(false);
    }
  };

  const current =
    languages.find((l) => l.code === i18n.language) ?? languages[0];

  return (
    <sc.Wrapper
      ref={wrapperRef}
      onMouseEnter={() => handleMouseOver(true)}
      onMouseLeave={() => handleMouseOver(false)}
    >
      <sc.LangButton type="button" aria-label="Select language">
        {current.abbr}
      </sc.LangButton>
      {open && (
        <sc.Dropdown>
          {languages
            .filter((lang) => lang.code !== current.code)
            .map((lang) => (
              <sc.LangOption
                key={lang.code}
                onClick={() => handleSelect(lang.code)}
              >
                {lang.abbr}
              </sc.LangOption>
            ))}
        </sc.Dropdown>
      )}
    </sc.Wrapper>
  );
}
