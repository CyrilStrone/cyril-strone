import "../Styles/Home.css";

import { useEffect, useState } from "react";
import { $screenSizeEvent, setScreenSizeEvent } from "../../../Common/Size/Size";

import { Bio } from "../Molecules/HomeBio";
import { Code } from "../Molecules/HomeCode";
import { Do } from "../Molecules/HomeDo";
import { Project } from "../Molecules/HomeProject";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";
export const Home = () => {
  const screenSizeEvent = useStore($screenSizeEvent);
  const { t,i18n } = useTranslation()
  return (
    <div className="Home">
      {screenSizeEvent.width > screenSizeEvent.height ?
        <>
          <div onClick={()=>  i18n.changeLanguage("ru")} className="Home__Title">
            {t('Home__Title')}
          </div>
          <Bio  />
          <Do />
          <Project/>
          <Code /></> :
        <>
          <Bio />
          <Do />
        </>
      }
    </div>
  );
};
