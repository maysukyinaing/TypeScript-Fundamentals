

interface Course23 {
    title:string,
    subtitle:string,
    lessonsCount:number
}

type CreateCourse = (title:string, subtitle:string, lessonsCount:number) => Course23

type OnCourseCreated = (course:Course23) => void

const createCourse23 = (title:string, subtitle:string,
    lessonsCount:number, callback:Function) => {
    console.log(`Creating course with title : ${title},
    Subtitle : ${subtitle}, lesson cunt : ${lessonsCount}`);

    const course = {
        title, 
        subtitle,
        lessonsCount
    }as Course23

    callback(course);

    return course;
}
console.log(createCourse23)