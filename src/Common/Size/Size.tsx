import { createEvent, createStore } from "effector";

export const $screenSizeEvent= createStore<any>({ width: window.innerWidth, height: window.innerHeight })  
export const setScreenSizeEvent = createEvent<any>()
$screenSizeEvent.on(setScreenSizeEvent, (_,val)=> val);