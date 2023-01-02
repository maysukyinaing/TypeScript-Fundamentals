import { subtle } from "crypto";

let courseName = "TypeScript Bootcamp";

if(courseName){
    let subTitle = "Learn the language fundamentals, build praticle projects"
    printCourseName(courseName);
}


function printCourseName(name:string) {
    console.log('Course name is '+ name.toUpperCase());
}

//tsc --noEmitOnError .\01-why-typescript.ts
//let -> scope variable (local variable)
//var -> global variable
//const -> constant variable (can't change)