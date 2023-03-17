import { Languages } from "../Molecules/Languages";
import { Logo } from "../Molecules/Logo";
import { Menu } from "../Molecules/Menu";
import "../Styles/Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Actual">
        <Logo />
        <div className="Header__Actual__Menu">
          <Menu />
          <Languages />
        </div>
      </div>
    </div>
  );
};
