
import { useStore } from "effector-react";
import { useState } from "react";
import { $screenSizeEvent } from "../../../Common/Size/Size";

import "../Styles/BlogItem.css"
import { useTranslation } from "react-i18next";
export interface IBlogItem {
    title: string
    image: string
    description: string
    text: string
    id: string
}
export const BlogItem = (params: IBlogItem) => {
    const [show, setShow] = useState<boolean>(false);
    const screenSizeEvent = useStore($screenSizeEvent);
    const { t } = useTranslation()
    
    return (
        <div className="BlogItem__General">
            <div className="BlogItem">
                {screenSizeEvent.width > screenSizeEvent.height ?
                    <>
                        <div className="BlogItem__Image">
                            <img className="BlogItem__Image__Background" src={params.image} alt="" />
                        </div>
                        <div className="BlogItem__Info">
                            <div className="BlogItem__Info__Id">
                                {params.id}
                            </div>
                            <div className="BlogItem__Info__Title">
                                {params.title}
                            </div>
                            <div className="BlogItem__Info__Description ">
                                {params.description}
                            </div>
                            {
                                !show && <div onClick={() => { setShow(!show) }} className="BlogItem__Button">
                                    {t('BlogItem__Button')}
                                </div>
                            }
                        </div>
                    </>
                    :
                    <>
                        <div className="BlogItem__Info__Title">
                            {params.title}
                        </div>
                        <div className="BlogItem__Info__Id">
                            {params.id}
                        </div>
                        <div className="BlogItem__Image">
                            <img className="BlogItem__Image__Background" src={params.image} alt="" />
                        </div>
                        <div className="BlogItem__Info__Description ">
                            {params.description}
                        </div>
                        {
                            !show && <div onClick={() => { setShow(!show) }} className="BlogItem__Button">
                                {t('BlogItem__Button')}
                            </div>
                        }

                    </>
                }
            </div>
            {
                show && <div className="BlogItem__Text ">
                    {params.text}
                    <div onClick={() => { setShow(!show) }} className="BlogItem__Text__Button BlogItem__Button">
                        {t('BlogItem__Button__Text')}
                    </div>
                </div>
            }
        </div>

    );
};
