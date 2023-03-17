
import "../Styles/ProjectItem.css"
import React from "../../../Common/Icons/React.svg"
import Link from "../../../Common/Icons/Link.svg"
import New from "../../../Common/Icons/New.svg"
import { NavLink } from "react-router-dom";
export interface IProjectItem {
    type: string
    name: string
    description: string
    technology: string[]
    link: string
    preview: string
    new?:boolean
}
export const ProjectItem = (params: IProjectItem) => {
    return (
        <div className="ProjectItem">
            <div className="ProjectItem__Preview">
                {params.new && <img className="ProjectItem__Preview__New" src={New}/>}
                <div className="ProjectItem__Preview__Technology">
                    {params.technology.map((e: any) =>
                        <img className="ProjectItem__Preview__Technology__Item" src={e == "React" ? React : ""} alt="Technology" />
                    )}
                </div>
                <img className="ProjectItem__Preview__Background" src={params.preview} alt="" />
                <NavLink to={params.link} className="ProjectItem__Preview__Button">
                    <img className="ProjectItem__Preview__Background__Image" src={Link} alt="" />
                </NavLink>
            </div>
            <div className="ProjectItem__Info">
                <div className="ProjectItem__Info__Type">
                    {params.type}
                </div>
                <div className="ProjectItem__Info__Name">
                    {params.name}
                </div>
                <div className="ProjectItem__Info__Description ">
                    {params.description}
                </div>
            </div>
        </div>
    );
};
