import { Bio } from "../Molecules/HomeBio";
import { Code } from "../Molecules/HomeCode";
import { Do } from "../Molecules/HomeDo";
import { Project } from "../Molecules/HomeProject";
import "../Styles/Home.css";
export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__Title">
        Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork.
      </div>
      <Bio/>
      <Do/>
      <Project/>
      <Code/>
      <div className="Home__Do">

      </div>
    </div>
  );
};
