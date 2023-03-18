import { useEffect, useState } from "react";
import { setScreenSizeEvent } from "../../../Common/Size/Size";
import { Bio } from "../Molecules/HomeBio";
import { Code } from "../Molecules/HomeCode";
import { Do } from "../Molecules/HomeDo";
import { Project } from "../Molecules/HomeProject";
import "../Styles/Home.css";
export const Home = () => {
  const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
          <Bio screenSize={screenSize} />
          <Do />
          <Project/>
          <Code /></> :
        <>
          <Bio screenSize={screenSize} />
          <Do />
        </>
      }
    </div>
  );
};
