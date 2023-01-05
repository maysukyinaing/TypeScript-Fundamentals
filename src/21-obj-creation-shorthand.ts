

interface Course21 {
    title:string,
    subtitle:string,
    lessonsCount:number;
}

const title = "TypeScript Bootcamp",
      subtitle = "Learn the language from ground up!",
      lessonsCount = 10

const course21a:Course21={
    title:title,
    subtitle:subtitle,
    lessonsCount:lessonsCount
}

const course21b:Course21={
    title,
    subtitle,
    lessonsCount
}

function printShortHandCourse(course:Course21) {
    console.log(`Title : ${title}, Subtitle : ${subtitle}, LessonsCount : ${lessonsCount}`)
}

printShortHandCourse(course21a)
printShortHandCourse(course21b)