
/*
interface Course24{
    title:string,
    subtitle:string,
    lessonCount:number
}
*/

type CourseRecord = [string,string,number];

//const courseRecord : CourseRecord = ["Typescript Bootcamp","Learn the language fundamentals", 100]

function createCourse24(title:string, subtitle:string):CourseRecord {
    console.log(`Title: ${title}, Subtitle : ${subtitle}`)
    return [title,subtitle, 10];
}

createCourse24("Typescript Bootcamp","Learn the language fundamentals")