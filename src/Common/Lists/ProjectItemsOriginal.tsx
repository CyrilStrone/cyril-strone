import { createEvent, createStore } from "effector";
import Cepr from "../../Common/Projects/Cepr.png"

export const $ProjectItemsOriginal= createStore<any>([
    {
        new:true,
        name: "CEPR",
        description: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
        technology: ["React"],
        link: "https://portal.coolantsatellite.com/presentation/",
        type: "Web Development",
        preview:Cepr
    },
    {
        new:false,
        name: "CEPR",
        description: "Serrow restructured and designed core pages, creating interactive elements that put users in control and allowed them to discover the information needed to make a decision.",
        technology: ["React"],
        link: "https://portal.coolantsatellite.com/presentation/",
        type: "Web Development",
        preview:Cepr
    }
])  
export const setProjectItemsOriginal = createEvent<any>()
$ProjectItemsOriginal.on(setProjectItemsOriginal, (_,val)=> val);