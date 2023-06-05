
import "../Styles/ProjectItem.css"
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
import Link from "../../../Common/Icons/Link.svg"
import New from "../../../Common/Icons/New.svg"
import { useStore } from "effector-react";
import { $screenSizeEvent } from "../../../Common/Size/Size";
export interface IProjectItem {
    type: string
    name: string
    description: string
    technology: string[]
    link: string
    preview: string
    new?: boolean
}
export const ProjectItem = (params: IProjectItem) => {
    const screenSizeEvent = useStore($screenSizeEvent);

    return (
        <div className="ProjectItem">
            {screenSizeEvent.width > screenSizeEvent.height ?
                <>
                    <div className="ProjectItem__Preview">
                        {params.new && <img className="ProjectItem__Preview__New" src={New} />}
                        <div className="ProjectItem__Preview__Technology">
                            {params.technology.map((e: any, id: any) =>
                                <img key={id} className="ProjectItem__Preview__Technology__Item"
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
                        <img className="ProjectItem__Preview__Background" src={params.preview} alt="" />
                        {params.link && <a target="_blank" href={params.link} className="ProjectItem__Preview__Button">
                            <img className="ProjectItem__Preview__Background__Image" src={Link} alt="" />
                        </a>}

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
                </>
                :
                <>
                    <div className="ProjectItem__Info__Name">
                        {params.name}
                    </div>
                    <div className="ProjectItem__Info__Type">
                        {params.type}
                    </div>


                    <div className="ProjectItem__Preview">
                        {params.new && <img className="ProjectItem__Preview__New" src={New} />}
                        <div className="ProjectItem__Preview__Technology">
                            {params.technology.map((e: any, id: any) =>
                                <img key={id} className="ProjectItem__Preview__Technology__Item"
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
                        <img className="ProjectItem__Preview__Background" src={params.preview} alt="" />
                        {params.link &&
                            <a target="_blank" href={params.link} className="ProjectItem__Preview__Button">
                                <img className="ProjectItem__Preview__Background__Image" src={Link} alt="" />
                            </a>
                        }
                    </div>
                    <div className="ProjectItem__Info__Description ">
                        {params.description}
                    </div>
                </>
            }
        </div>
    );
};
