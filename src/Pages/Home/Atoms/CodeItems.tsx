
import "../Styles/CodeItems.scss"
import React from "../../../Common/Icons/React.svg"
import TypeScript from "../../../Common/Icons/TypeScript.svg"
import JavaScript from "../../../Common/Icons/JavaScript.svg"
import HTML from "../../../Common/Icons/HTML.svg"
import CSS from "../../../Common/Icons/CSS.svg"
import SASS from "../../../Common/Icons/SASS.svg"
import ThreeJS from "../../../Common/Icons/ThreeJS.svg"
import Webpack from "../../../Common/Icons/Webpack.svg"
import Axios from "../../../Common/Icons/Axios.svg"
import Effector from "../../../Common/Icons/Effector.svg"
import Redux from "../../../Common/Icons/Redux.svg"
import Star from "../../../Common/Icons/Star.svg"
import { ApiGitHub, IApiGitHub } from "../../../Common/ApiGitHub"
import { useState } from "react"
export interface ICodeItems {
    name: string
    description: string
    technology: string[]
    link: string
    stars: string
}
export const CodeItems = (params: ICodeItems) => {
    const [star, setStar] = useState<number>(0)
    const requestApiGitHub = async (params: IApiGitHub) => {
        setStar(await ApiGitHub({ ...params }))
    }
    requestApiGitHub({ profile: "CyrilStrone", repo: params.stars })
    return (
        <a target="_blank" href={params.link} className="CodeItems">
            {/* <a target="_blank" href={params.link} className="CodeItems__Link">
                <img className="CodeItems__Link__Image" src={Link} alt="" />
            </a> */}
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
                    {params.technology.map((e: any, id: any) =>
                        <img key={id} className="CodeItems__Preview__Technology__Item"
                            src={e == "React" ?
                                React : e == "TypeScript" ?
                                    TypeScript : e == "JavaScript" ?
                                        JavaScript : e == "HTML" ?
                                            HTML : e == "CSS" ?
                                                CSS : e == "SASS" ?
                                                    SASS : e == "ThreeJS" ?
                                                        ThreeJS : e == "Axios" ?
                                                            Axios : e == "Effector" ?
                                                                Effector : e == "Redux" ?
                                                                    Redux : e == "Webpack" ?
                                                                        Webpack : ""} alt="Technology" />
                    )}
                </div>
                <div className="CodeItems__Footer__Stars">
                    <img src={Star} alt="Star" />
                    <div className="CodeItems__Footer__Stars__Text">
                        {star + " "}
                        Stars
                    </div>
                </div>
            </div>
        </a>
    );
};
