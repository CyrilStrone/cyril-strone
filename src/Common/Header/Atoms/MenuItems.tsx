import { NavLink } from "react-router-dom";
import "../Styles/MenuItems.css";
export interface IMenuItems {
  name: string;
  href: string;
}
export const MenuItems = (params:IMenuItems) => {
  return (
      <NavLink className="MenuItems" to={params.href !== "" ? params.href : "/"}>{params.name}</NavLink>
  );
};
