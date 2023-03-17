
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import Cepr from "../../../Common/Projects/Cepr.png"
import { ProjectItem } from "../Atoms/ProjectItem";
import { NavLink } from "react-router-dom";
export const Project = () => {
    return (
        <div className="Project">
            <div className="Project__Title">
                Featured Project
            </div>
            <div className="Project__Items">
                <ProjectItem new={true} type={"Web Development"} name={"CEPR"} description={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."} technology={["React"]} link={"https://portal.coolantsatellite.com/presentation/"} preview={Cepr}/>
                <ProjectItem type={"Web Development"} name={"CEPR"} description={"Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision."} technology={["React"]} link={"https://portal.coolantsatellite.com/presentation/"} preview={Cepr}/>
            </div>
            
            <NavLink to={"/"} className="Project__Button">
                <img src={More} alt="" />
                See More
            </NavLink>
        </div>
    );
};
