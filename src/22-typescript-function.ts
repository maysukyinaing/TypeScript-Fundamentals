
interface Course22{
    title:string,
    subtitle:string,
    lessonsCount:number
}

function createCourse(title:string,subtitle:string,lessonsCount:number):Course22 {
    console.log(`Creating course with Title : ${title}, subtitle : ${subtitle}, lessonsCount : ${lessonsCount}`)

    return {
        title, subtitle, lessonsCount
    } 
}

const result = createCourse("TypeScript", "Learn the language fundamentals", 10)

console.log(typeof createCourse)