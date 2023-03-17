
import "../Styles/Card.css"
import Circle from "../../../Common/Home/Circle.svg"
export interface ICard {
    img: string
    title: string
    description: string
}
export const Card = (params: ICard) => {
    return (
        <div className="Card">
            <div className="Card__Images">
                <img className="Card__Images__Circle" src={Circle} alt="" />
                <img className="Card__Images__Other" src={params.img} alt="" />
            </div>
            <div className="Card__Title">
                {params.title}
            </div>
            <div className="Card__Description">
                {params.description}
            </div>
        </div>
    );
};
