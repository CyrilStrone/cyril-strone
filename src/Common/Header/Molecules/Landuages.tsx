import { $choiseLang, setchoiseLang } from "../Logics/Langhook";
import { useStore } from "effector-react";

import "../Styles/Landuages.css";
export const Landuages = () => {
  const choiseLang = useStore($choiseLang);

  return (
    <div className="Landuages" onClick={()=>setchoiseLang(!choiseLang)}>
      {choiseLang ? ("EN") : ("RU")}
    </div>
  );
};
