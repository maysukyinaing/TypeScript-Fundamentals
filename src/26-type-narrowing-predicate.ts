

let unknownvalue1:unknown

if(typeof unknownvalue1 == "string") {
    let value14:string = unknownvalue1
}

//let value15:string = unknownvalue1

interface Course{
    readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

const course:unknown = {
    title:"Typescript Bootcamp",
    subtitle:"Learn the language fundamentals, build praticle project",
    lessonsCount: 19
}

if(isCourse(course)) {
    course.lessonsCount
}


function isCourse(value:unknown):value is Course {
    const course = value as Course;
    return course?.title != null && course?.subtitle !=null;
}