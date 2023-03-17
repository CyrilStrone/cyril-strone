import { NavLink, useLocation } from "react-router-dom";
import "../Styles/Footer.css";
import Home from "../Assets/Home.svg"
import Mentorship from "../Assets/Mentorship.svg"
import Portofolio from "../Assets/Portofolio.svg"
import More from "../Assets/More.svg"

export const Footer = () => {
  const location = useLocation()
  return (
    <div className="Footer">
      <NavLink to={"/"} style={() => ({ opacity: "/" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
        <img className="Footer__Item__Img" src={Home} alt="" />
        <div className="Footer__Item__Title">
          Home
        </div>
      </NavLink>
      <NavLink to={"/Mentorship"} style={() => ({ opacity: "/Mentorship" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
        <img className="Footer__Item__Img" src={Mentorship} alt="" />
        <div className="Footer__Item__Title">
          Mentorship
        </div>
      </NavLink>
      <NavLink to={"/Portfolio"} style={() => ({ opacity: "/Portfolio" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
        <img className="Footer__Item__Img" src={Portofolio} alt="" />
        <div className="Footer__Item__Title">
          Portofolio
        </div>
      </NavLink>
      <NavLink to={"/More"} style={() => ({ opacity: "/More" === location.pathname ? "1" : "0.4" })} className="Footer__Item">
        <img className="Footer__Item__Img" src={More} alt="" />
        <div className="Footer__Item__Title">
          More
        </div>
      </NavLink>
    </div>
  );
};
