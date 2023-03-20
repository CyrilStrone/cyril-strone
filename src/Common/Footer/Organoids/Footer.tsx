import { NavLink, useLocation } from "react-router-dom";
import "../Styles/Footer.css";
import Home from "../Assets/Home.svg"
import Mentorship from "../Assets/Mentorship.svg"
import Portofolio from "../Assets/Portofolio.svg"
import More from "../Assets/More.svg"
import LinkedIn from "../../../Common/Icons/LinkedIn.svg"
import GitHub from "../../../Common/Icons/GitHub.svg"
import Telegram from "../../../Common/Icons/Telegram.svg"

import { $screenSizeEvent } from "../../Size/Size";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation()
  const location = useLocation();
  const screenSizeEvent = useStore($screenSizeEvent);
  return (
    <div className="Footer">
      {screenSizeEvent.width < screenSizeEvent.height ?
        <>
          <NavLink to={"/"} style={() => ({ opacity: "/" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
            <img className="Footer__Item__Img" src={Home} alt="" />
            <div className="Footer__Item__Title">
            {t('Header__Home')}
            </div>
          </NavLink>
          <NavLink to={"/Portfolio"} style={() => ({ opacity: "/Portfolio" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
            <img className="Footer__Item__Img" src={Mentorship} alt="" />
            <div className="Footer__Item__Title">
            {t('Header__Portfolio')}
            </div>
          </NavLink>
          <NavLink to={"/Snippet"} style={() => ({ opacity: "/Snippet" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
            <img className="Footer__Item__Img" src={Portofolio} alt="" />
            <div className="Footer__Item__Title">
            {t('Header__Snippet')}
            </div>
          </NavLink>
          <NavLink to={"/Blog"} style={() => ({ opacity: "/Blog" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
            <img className="Footer__Item__Img" src={More} alt="" />
            <div className="Footer__Item__Title">
            {t('Header__Blog')}
            </div>
          </NavLink>
        </>
        : <>
          <div className="Footer__Title">
          {t('Footer__Title')}
          </div>
          <div className="Footer__LinkBar">
            <a target="_blank" href={"https://www.linkedin.com/in/cyrilstrone/"} className="Footer__Item">
              <img className="Footer__Item__Img" src={LinkedIn} alt="" />
            </a>
            <a target="_blank" href={"https://github.com/CyrilStrone"} className="Footer__Item">
              <img className="Footer__Item__Img" src={GitHub} alt="" />
            </a>
            <a target="_blank" href={"https://t.me/cyrilstrone"} className="Footer__Item">
              <img className="Footer__Item__Img" src={Telegram} alt="" />
            </a>
          </div>
        </>}
    </div>
  );
};
