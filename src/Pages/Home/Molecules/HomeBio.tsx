import { NavLink } from "react-router-dom";
import inst from "../../../Common/Icons/inst.svg"
import twit from "../../../Common/Icons/twit.svg"
import face from "../../../Common/Icons/face.svg"
import Me from "../../../Common/Home/Me.png"
import Circle from "../../../Common/Icons/Circle2.svg"

import "../Styles/Bio.scss"
import { $screenSizeEvent } from "../../../Common/Size/Size";
import { useStore } from "effector-react";
import { useTranslation } from "react-i18next";

export const Bio = () => {
    const screenSizeEvent = useStore($screenSizeEvent);
    const { t } = useTranslation()

    return (
        <div className="Bio">
            <div className="Bio__Avatar">
                <img src={Circle} className="Bio__Avatar__Circle" alt="" />
                <img src={Me} alt="" />
            </div>
            {screenSizeEvent.width > screenSizeEvent.height ?
                <>
                    <div className="Bio__Biography ">
                        <div className="Bio__Biography__Title ">
                            {t('Bio__Biography__Title')}
                        </div>
                        <div className="Bio__Biography__Description">
                            {t('Bio__Biography__Description')}                        </div>
                    </div>
                    <div className="Bio__Connect">
                        <div className="Bio__Connect__Title">
                            {t('Bio__Connect__Title')}
                        </div>
                        <div className="Bio__Connect__Icons">
                            <NavLink to={"/"}>
                                <img src={inst} alt="inst" />
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={twit} alt="twit" />
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={face} alt="face" />
                            </NavLink>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="Bio__Connect">
                        <div className="Bio__Connect__Title">
                            {t('Bio__Connect__Title')}
                        </div>
                        <div className="Bio__Connect__Icons">
                            <NavLink to={"/"}>
                                <img src={inst} alt="inst" />
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={twit} alt="twit" />
                            </NavLink>
                            <NavLink to={"/"}>
                                <img src={face} alt="face" />
                            </NavLink>
                        </div>
                    </div>
                    <div className="Bio__Title">
                        {t('Home__Title')}
                    </div>
                    <div className="Bio__Biography ">
                        <div className="Bio__Biography__Title ">
                            {t('Bio__Biography__Title')}
                        </div>
                        <div className="Bio__Biography__Description">
                            {t('Bio__Biography__Description')}                        
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
