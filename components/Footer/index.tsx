import React, {
  useRef,
  useState,
  useEffect,
  useMemo,
  useTransition,
} from "react";
import Image from "next/image";

import B from "../ActionButton";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function Footer({ ref }: any) {
  const { t } = useTranslation();

  return (
    <sc.MainWrapper ref={ref}>
      <sc.TextWrapper>
        <p>
          {t("contact.intro")}{" "}
          <B href="http://www.linkedin.com/in/vbrito-dev">LinkedIn</B>,{" "}
          <B href="https://github.com/victorfbrito">GitHub</B>,{" "}
          <B href="mailto:victor_f_brito@outlook.com">email</B>{" "}
          {t("contact.resume_call")}{" "}
          <B href="/resume.pdf">{t("contact.resume")}</B>.
        </p>
      </sc.TextWrapper>
      <sc.ImageWrapper>
        <Image src="/arrow-outline.svg" alt="" layout="fill" />
        <sc.FilledImage src="/arrow-filled.svg" alt="" layout="fill" />
      </sc.ImageWrapper>
    </sc.MainWrapper>
  );
}
