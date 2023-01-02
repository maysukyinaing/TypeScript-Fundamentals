

interface Course17 {
    title:string,
    subtitle:string,
    lessonsCount:number
}

let course17:Course17 = {
    title:"TypeScript",
    subtitle:"Learn the language fundamental",
    lessonsCount:10
}
function printCourse(course:Course17) {

    const {title, ... rest} = course

    console.log(`Title:${title}, Subtitle:${rest.subtitle}, LessonCount:${rest.lessonsCount}`)
}

printCourse(course17)