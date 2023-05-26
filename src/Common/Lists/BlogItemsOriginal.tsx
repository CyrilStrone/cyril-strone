import { createEvent, createStore } from "effector";
export const $BlogItemsOriginal= createStore<any>([])   
export const setBlogItemsOriginal = createEvent<any>()
$BlogItemsOriginal.on(setBlogItemsOriginal, (_,val)=> val);
