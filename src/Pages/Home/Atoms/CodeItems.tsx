
import "../Styles/CodeItems.scss"
import React from "../../../Common/Icons/React.svg"
import Star from "../../../Common/Icons/Star.svg"
import { NavLink } from "react-router-dom";
export interface ICodeItems {
    name: string
    description: string
    technology: string[]
    link: string
    stars: number
}
export const CodeItems = (params: ICodeItems) => {
    return (
        <NavLink to={params.link} className="CodeItems">
            <div className="CodeItems__Info">
                <div className="CodeItems__Info__Name">
                    {params.name}
                </div>
                <div className="CodeItems__Info__Description ">
                    {params.description}
                </div>
            </div>
            <div className="CodeItems__Footer">
                <div className="CodeItems__Footer__Technology">
                    {params.technology.map((e: any) =>
                        <img className="CodeItems__Preview__Technology__Item" src={e == "React" ? React : ""} alt="Technology" />
                    )}
                </div>
                <div className="CodeItems__Footer__Stars">
                    <img src={Star} alt="Star" />
                    <div className="CodeItems__Footer__Stars__Text">
                        {params.stars+" "}
                        Stars
                    </div>
                </div>
            </div>
        </NavLink>
    );
};
