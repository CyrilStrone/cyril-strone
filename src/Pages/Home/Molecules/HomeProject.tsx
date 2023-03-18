
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import Cepr from "../../../Common/Projects/Cepr.png"
import { ProjectItem } from "../Atoms/ProjectItem";
import { NavLink } from "react-router-dom";
import { useStore } from "effector-react";
import { $ProjectItemsOriginal } from "../../../Common/Lists/ProjectItemsOriginal";

export const Project = () => {
    const CodeItemsOriginal = useStore($ProjectItemsOriginal);

    return (
        <div className="Project">
            <div className="Project__Title">
                Featured Project
            </div>
            <div className="Project__Items">
                {CodeItemsOriginal.map((e:any)=>
                     <ProjectItem new={e.new} type={e.type} name={e.name} description={e.description} technology={e.technology} link={e.link} preview={e.preview} />
                )}
            </div>
            
            <NavLink to={"/Snippet"} className="Project__Button">
                <img src={More} alt="" />
                See More
            </NavLink>
        </div>
    );
};
