
import "../Styles/Code.scss"
import "../Styles/Project.css"
import More from "../../../Common/Icons/More.svg"
import { NavLink } from "react-router-dom";
import { CodeItems } from "../Atoms/CodeItems";
import { $CodeItemsOriginal } from "../../../Common/Lists/CodeItemsOriginal";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";
export const Code = () => {
    const CodeItemsOriginal = useStore($CodeItemsOriginal);
    const { t } = useTranslation()
    return (
        <div className="Project">
            <div className="Project__Title">
                {t('Code__Title')}
            </div>
            <div className="Code__Items">
                {CodeItemsOriginal && CodeItemsOriginal.map((e: any) =>
                    <CodeItems name={e.name} description={e.description} technology={e.technology} link={e.link} stars={e.stars} />
                )}
            </div>
            <NavLink to={"/Portfolio"} className="Project__Button">
                <img src={More} alt="" />
                {t('Project__Button')}
            </NavLink>
        </div>
    );
};
