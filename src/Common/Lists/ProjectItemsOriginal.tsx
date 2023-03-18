import { createEvent, createStore } from "effector";

export const $ProjectItemsOriginal= createStore<any>([])  
export const setProjectItemsOriginal = createEvent<any>()
$ProjectItemsOriginal.on(setProjectItemsOriginal, (_,val)=> val);

