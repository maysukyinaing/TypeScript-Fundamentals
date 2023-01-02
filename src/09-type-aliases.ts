

type CourseStatus = "draft" | "published" | "unpublished" | "archived"

let courseStatus1:CourseStatus = "draft"

let newStatus:CourseStatus = "published"

type Course09 = {
   readonly title:string,
    subtitle:string,
    lessonsCount?:number
}

let course09:Course09 = {
    title: "Loving Kyi",
    subtitle: "adorable beauty",
    
}
course09.title = "hello"

console.log(course) 