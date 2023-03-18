import "../Styles/Snippet.css";

import Search from "../../../Common/Snippet/Search.svg"
import { CodeItems } from "../../Home/Atoms/CodeItems";
import { useEffect, useState } from "react";
import { useStore } from "effector-react";
import { $CodeItemsOriginal } from "../../../Common/Lists/CodeItemsOriginal";
import { useTranslation } from "react-i18next";

export const Snippet = () => {
    const { t } = useTranslation()
    const [value, setValue] = useState<any>({ text: "" });
    const CodeItemsOriginal = useStore($CodeItemsOriginal);
    const [CodeItemsDublicat, setCodeItemsDublicat] = useState<any>([])

    useEffect(()=>{
        setCodeItemsDublicat(CodeItemsOriginal)
    },[CodeItemsOriginal])

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prevPerson: any) => ({
            ...prevPerson,
            text: event.target.value
        }));
    };
    const handleSearch = () => {
        let NewCodeItemsDublicat: any[] = [];
        CodeItemsOriginal.map((e: any) => {
            for (let key in e) {
                if (e[key].toString().toLowerCase().includes(value.text.toLowerCase())) {
                    NewCodeItemsDublicat.push(e)
                    break
                }
            }
        })
        setCodeItemsDublicat(NewCodeItemsDublicat ? NewCodeItemsDublicat : null);
    };
    useEffect(() => {
        if (value.text == '') {
            setCodeItemsDublicat(CodeItemsOriginal)
        } else {
            handleSearch()
        }
    }, [value])

    return (
        <div className="Snippet">
            <div className="Snippet__Title">
                {t('Snippet__Title')}
            </div>
            <div className="Snippet__SearchBar">
                <div className="Snippet__SearchBar__Title">
                    {t('Snippet__SearchBar__Title')}
                </div>
                <div className="Snippet__SearchBar__InputBar">
                    <input onChange={handleTextChange} value={value.text} placeholder={t('Snippet__SearchBar__InputBar') || "Type your favorite snippet here, hehehe ....."} type="text" />
                    <img className="Snippet__SearchBar__Icon" src={Search} alt="" />
                </div>
            </div>
            <div className="Snippet__Items">
                {CodeItemsDublicat && CodeItemsDublicat.map((e: any) =>
                    <CodeItems name={e.name} description={e.description} technology={e.technology} link={e.link} stars={e.stars} />
                )}
            </div>
        </div>
    );
};
