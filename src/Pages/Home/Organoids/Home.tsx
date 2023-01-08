import { TypeAnimation } from "react-type-animation";
import { titleName } from "../../../Common/Logics/Titlename";
import Cat from "../../../Pictures/Home/Cat.jpg";
import "../Styles/Home.css";
export const Home = () => {
  titleName("Cyril Strone");
  return (
    <div className="Home">
      <img src={Cat} alt="Barsik" />
      <TypeAnimation
        sequence={["This is my cat, okay?", 5000, ""]}
        speed={40}
        wrapper="h2"
        repeat={Infinity}
        className={"Home__Cat"}
      />
    </div>
  );
};
