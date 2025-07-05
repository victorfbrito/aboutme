import React, { useState, useEffect } from "react";

import ScrollButton from "../ScrollButton";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function HorizontalGuide({ scrollTo }: any) {
  const { t } = useTranslation();

  return (
    <sc.MainWrapper>
      <sc.buttonWrapper dist="5%">
        <ScrollButton
          dist="5%"
          scrollTo={() => scrollTo(1)}
          label={t("guides.about")}
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper dist="35%">
        <ScrollButton
          dist="35%"
          scrollTo={() => scrollTo(2)}
          label={t("guides.work")}
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper dist="65%">
        <ScrollButton
          dist="65%"
          scrollTo={() => scrollTo(2.5)}
          label={t("guides.contact")}
        />
      </sc.buttonWrapper>
      <sc.buttonWrapper dist="5%"></sc.buttonWrapper>
    </sc.MainWrapper>
  );
}
