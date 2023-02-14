import { Link } from "react-router-dom";
import "../Styles/MenuItems.css";
export interface IMenuItems {
  name: string;
  href: string;
}
export const MenuItems = (params:IMenuItems) => {
  return (
    <div className="MenuItems">
      <Link className="MenuItems__Link" to={params.href !== "" ? params.href : "/"}>{params.name}</Link>
    </div>
  );
};
