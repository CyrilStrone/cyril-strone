
import "../Styles/Code.scss"
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import { NavLink } from "react-router-dom";
import { CodeItems } from "../Atoms/CodeItems";
export const Code = () => {
    return (
        <div className="Project">
            <div className="Project__Title">
                Code Snippet        </div>
            <div className="Code__Items">
                <CodeItems name={"Nextjs Starter"} description={"A dead simple for nextjs project."} technology={["React"]} link={"/"} stars={8} />
                <CodeItems name={"Nextjs Starter"} description={"A dead simple for nextjs project."} technology={["React"]} link={"/"} stars={8} />
                <CodeItems name={"Nextjs Starter"} description={"A dead simple for nextjs project."} technology={["React"]} link={"/"} stars={8} />
                <CodeItems name={"Nextjs Starter"} description={"A dead simple for nextjs project."} technology={["React"]} link={"/"} stars={8} />
            </div>

            <NavLink to={"/Portfolio"} className="Project__Button">
                <img src={More} alt="" />
                See More
            </NavLink>
        </div>
    );
};
