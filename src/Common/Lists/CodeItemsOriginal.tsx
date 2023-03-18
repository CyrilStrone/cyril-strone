import { createEvent, createStore } from "effector";

export const $CodeItemsOriginal= createStore<any>([
    {
        name: "Nextjs Starter",
        description: "A dead simple for nextjs project.",
        technology: ["React"],
        link: "/",
        stars: 2
    },
    {
        name: "Nextjs Starter",
        description: "A dead simple for nextjs project.",
        technology: ["React"],
        link: "/",
        stars: 3
    },
    {
        name: "Nextjs Starter",
        description: "A dead simple for nextjs project.",
        technology: ["React"],
        link: "/",
        stars: 1
    },
    {
        name: "Nextjs Starter",
        description: "A dead simple for nextjs project.",
        technology: ["React"],
        link: "/",
        stars: 1
    }
])  
export const setCodeItemsOriginal = createEvent<any>()
$CodeItemsOriginal.on(setCodeItemsOriginal, (_,val)=> val);