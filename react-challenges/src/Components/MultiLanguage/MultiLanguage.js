import React from "react";
import "./style.css";
import "./i18n";
import { useTranslation } from "react-i18next";

const MultiLanguage = () => {
  const { t } = useTranslation();
  return (
    <div className="container-i18">
      <h3>{t("greeting")}</h3>
    </div>
  );
};

export default MultiLanguage;
