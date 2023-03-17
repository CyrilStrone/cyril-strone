
import { Card } from "../Atoms/Card";
import "../Styles/Do.css"
import Globe from "../../../Common/Icons/Globe.svg"
import List from "../../../Common/Icons/List.svg"

export const Do = () => {
    return (
        <div className="Do">
            <div className="Do__Description">
                <div className="Do__Description__Title">
                    What I do
                </div>
                <div className="Do__Description__Text">
                    Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority.
                </div>
            </div>
            <div className="Do__Cards">
                <Card img={Globe} title={"Web Development"} description={"You will receive a customized plan for your fitness journey, and lots of support."} />
                <Card img={List} title={"UX Research"} description={"You will receive a customized plan for your fitness journey, and lots of support."} />
            </div>
        </div>
    );
};
