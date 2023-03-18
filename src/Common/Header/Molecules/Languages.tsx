import { $choiseLang, setchoiseLang } from "../Logics/Langhook";
import { useStore } from "effector-react";

import "../Styles/Languages.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const Languages = () => {
  const choiseLang = useStore($choiseLang);
  const { i18n } = useTranslation()
  useEffect(() => {
    i18n.changeLanguage(choiseLang ? ("en") : ("ru"))
  }, [choiseLang])
  return (
    <div className="Languages" onClick={() => setchoiseLang(!choiseLang)}>
      {choiseLang ? ("en") : ("ru")}
    </div>
  );
};
