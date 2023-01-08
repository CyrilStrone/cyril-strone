import { createEvent, createStore } from "effector";

export const $choiseLang = createStore<boolean>(true)  
export const setchoiseLang = createEvent<boolean>()
$choiseLang.on(setchoiseLang, (_,val)=> val);
