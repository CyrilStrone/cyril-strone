
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import Cepr from "../../../Common/Projects/Cepr.png"
import { ProjectItem } from "../Atoms/ProjectItem";
import { NavLink } from "react-router-dom";
import { useStore } from "effector-react";
import { $ProjectItemsOriginal } from "../../../Common/Lists/ProjectItemsOriginal";
import { useTranslation } from "react-i18next";

export const Project = () => {
    const CodeItemsOriginal = useStore($ProjectItemsOriginal);
    const { t } = useTranslation()

    return (
        <div className="Project">
            <div className="Project__Title">
            {t('Project__Title')}
            </div>
            <div className="Project__Items">
                {CodeItemsOriginal.map((e:any, id:any)=>
                     id < 2 && <ProjectItem key={id} new={e.new} type={e.type} name={e.name} description={e.description} technology={e.technology} link={e.link} preview={e.preview} />
                )}
            </div>
            
            <NavLink to={"/Portfolio"} className="Project__Button">
                <img src={More} alt="" />
                {t('Project__Button')}
            </NavLink>
        </div>
    );
};
