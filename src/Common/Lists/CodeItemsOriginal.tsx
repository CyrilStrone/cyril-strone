import { createEvent, createStore } from "effector";

export const $CodeItemsOriginal= createStore<any>([])   
export const setCodeItemsOriginal = createEvent<any>()
$CodeItemsOriginal.on(setCodeItemsOriginal, (_,val)=> val);
