import { NavLink } from "react-router-dom";
import inst from "../../../Common/Icons/inst.svg"
import twit from "../../../Common/Icons/twit.svg"
import face from "../../../Common/Icons/face.svg"
import Me from "../../../Common/Home/Me.png"
import Circle from "../../../Common/Icons/Circle2.svg"

import "../Styles/Bio.scss"
export interface IBio {
    screenSize: {
        width: number;
        height: number;
    }
}
export const Bio = (params: IBio) => {
    return (
        <div className="Bio">
            <div className="Bio__Avatar">
                <img src={Circle} className="Bio__Avatar__Circle" alt="" />
                <img src={Me} alt="" />
            </div>
            {params.screenSize.width > params.screenSize.height ?
                <>
                    <div className="Bio__Biography ">
                        <div className="Bio__Biography__Title ">
                            Biography
                        </div>
                        <div className="Bio__Biography__Description">
                            Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile.
                        </div>
                    </div>
                    <div className="Bio__Connect">
                        <div className="Bio__Connect__Title">
                            Lets connect
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
                            Lets connect
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
                        Hi Im Cyril Strone, a special human with some ability to love learning and working on teamwork.
                    </div>
                    <div className="Bio__Biography ">
                        <div className="Bio__Biography__Title ">
                            Biography
                        </div>
                        <div className="Bio__Biography__Description">
                            Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile.
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
