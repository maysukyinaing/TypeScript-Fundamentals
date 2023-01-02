
interface Course19{
    title:string,
    lessonsCount:number
}
const course19a:Course19 = {
    title:"TypeScript Course...",
    lessonsCount:100
}

const course19b:Course19 = {
    title:"Angular Course...",
    lessonsCount:20
}

function printCourses(message:string, ...courses:Course19[]) {
    console.log(message)

    for(let course of courses) {
        console.log(course.title);
    }
}


printCourses("Welcome to the TypeScript Bootcamp", course19a, course19b)

//printCourses("Welcome to the TypeScript Bootcamp", [course19a, course19b])