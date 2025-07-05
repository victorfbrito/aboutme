import React, { useEffect, useState } from "react";

import * as sc from "./styled";
import { useTranslation } from "react-i18next";

export default function Extra() {
  const { t } = useTranslation();

  return <sc.MainWrapper>{t("about.based")}</sc.MainWrapper>;
}
