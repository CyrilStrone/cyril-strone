import { Landuages } from "../Molecules/Landuages";
import { Logo } from "../Molecules/Logo";
import { Menu } from "../Molecules/Menu";
import "../Styles/Header.css";
export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Actual">
      <Logo/>
      <div className="Header__Actual__Menu">
      <Menu/>
      <Landuages/>
      </div>
      </div>
    </div>
  );
};
