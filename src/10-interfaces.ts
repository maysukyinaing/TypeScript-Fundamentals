
interface ICourse{
    readonly title:string,
    subTitle:string,
    lessonsCount?:number
}

const course:ICourse={
    title:"TypeScript",
    subTitle:"Learn Language Fundamentals.",
    lessonsCount:10
}

const otherCourse: ICourse = {
    title:"KyiNaing",
    subTitle:"Naing",
    lessonsCount:27
}

otherCourse.title = "Hello"
otherCourse=null

const optionalCourse:ICourse = {
    title:"Kyi",
    subTitle:"Naing"
}