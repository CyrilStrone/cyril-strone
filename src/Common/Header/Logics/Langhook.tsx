import { createEvent, createStore } from "effector";

export const $choiseLang = createStore<string>("")  
export const setchoiseLang = createEvent<string>()
$choiseLang.on(setchoiseLang, (_,val)=> val);
