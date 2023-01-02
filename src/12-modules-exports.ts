import {MAX_PAGE_SIZE} from "./12-modules-import";

export const PAGE_SIZE = 100;

export type Course={
    title:string,
    subtitle:string,
    lessonsCount:number
}

export const COURSE:Course={
    title:"TypeScript",
    subtitle:"Learn from ground up!",
    lessonsCount:3
}