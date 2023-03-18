
import { Card } from "../Atoms/Card";
import "../Styles/Do.css"
import Globe from "../../../Common/Icons/Globe.svg"
import List from "../../../Common/Icons/List.svg"
import { useTranslation } from "react-i18next";

export const Do = () => {
    const { t, i18n } = useTranslation()

    return (
        <div className="Do">
            <div className="Do__Description">
                <div className="Do__Description__Title">
                    {t('Do__Description__Title')}
                </div>
                <div className="Do__Description__Text">
                    {t('Do__Description__Text')}
                </div>
            </div>
            <div className="Do__Cards">
                <Card img={Globe} title={t('Do__Cards__One__Title')} description={t('Do__Cards__One__Description')} />
                <Card img={List} title={t('Do__Cards__Two__Title')} description={t('Do__Cards__Two__Description')} />
            </div>
        </div>
    );
};
