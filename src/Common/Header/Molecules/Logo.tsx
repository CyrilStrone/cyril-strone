import "../Styles/Logo.css";
import PicturesLogo from '../../../Pictures/Header/Logo.svg'
export const Logo = () => {
  return (
    <div className="Logo">
      <img src={PicturesLogo} alt="CyrilStrone Logo" />
    </div>
  );
};
