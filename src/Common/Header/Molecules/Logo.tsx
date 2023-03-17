import "../Styles/Logo.css";
import { NavLink } from "react-router-dom";
export const Logo = () => {
  return (
    <NavLink to={"/"} className="Logo">
      Cyril Strone
    </NavLink>
  );
};
