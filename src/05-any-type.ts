//any means lifted type , will not check type system
//any doesn't mean like generic in java
//avoid any as much as you can , it is good practice
let lessonsCount5:any = 10;
lessonsCount5 = 'Hello'

let numbers5:any[] = [10,20,'Hello',true]
console.log(numbers5)

printCourse('Kyi', 27)

function printCourse(title:string,lessonsCount:number) {
    console.log(`Title: ${title}, lessons count: ${lessonsCount}`)
}