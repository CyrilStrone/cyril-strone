import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { setScreenSizeEvent } from "../../../Common/Size/Size";
import { Bio } from "../Molecules/HomeBio";
import { Code } from "../Molecules/HomeCode";
import { Do } from "../Molecules/HomeDo";
import { Project } from "../Molecules/HomeProject";
import "../Styles/Home.css";
export const Home = () => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("i18n",i18n)
  useEffect(()=>{
    setScreenSizeEvent(screenSize)
  },[screenSize])

  return (
    <div className="Home">
      {screenSize.width > screenSize.height ?
        <>
          <div className="Home__Title">
            Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork. 
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
