

interface Course {
    title:string;
    subtitle:string;
    stats:{
        lessonsCount:number;
    }
}

let course:Course={
    title:"TypeScript Bootcamp",
    subtitle:"Learn the language from ground up!",
    stats:{
        lessonsCount:10
    }
}

const newCourse = {...course}

console.log(newCourse)
course.stats.lessonsCount = 100
console.log(newCourse)