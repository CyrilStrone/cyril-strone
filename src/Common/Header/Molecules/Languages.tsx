import { $choiseLang, setchoiseLang } from "../Logics/Langhook";
import { useStore } from "effector-react";

import "../Styles/Languages.css";
export const Languages = () => {
  const choiseLang = useStore($choiseLang);

  return (
    <div className="Languages" onClick={()=>setchoiseLang(!choiseLang)}>
      {choiseLang ? ("EN") : ("RU")}
    </div>
  );
};
