
import "../Styles/Code.scss"
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import { NavLink } from "react-router-dom";
import { CodeItems } from "../Atoms/CodeItems";
import { $CodeItemsOriginal } from "../../../Common/Lists/CodeItemsOriginal";
import { useStore } from "effector-react";
export const Code = () => {
    const CodeItemsOriginal = useStore($CodeItemsOriginal);

    return (
        <div className="Project">
            <div className="Project__Title">
                Code Snippet        </div>
            <div className="Code__Items">
                {CodeItemsOriginal && CodeItemsOriginal.map((e: any) =>
                    <CodeItems name={e.name} description={e.description} technology={e.technology} link={e.link} stars={e.stars} />
                )}
            </div>
            <NavLink to={"/Portfolio"} className="Project__Button">
                <img src={More} alt="" />
                See More
            </NavLink>
        </div>
    );
};
