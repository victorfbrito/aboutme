import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import * as sc from "./styled";

export default function About() {
  const { t } = useTranslation();

  return (
    <sc.MainWrapper>
      <p>{t("about.goal")}</p>
      <p>{t("about.passion")}</p>
      <p>{t("about.stack")}</p>
    </sc.MainWrapper>
  );
}
