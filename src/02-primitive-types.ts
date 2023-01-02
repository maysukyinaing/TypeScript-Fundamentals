

const lessonCount:number = 10.2;
const total = lessonCount + 10;

console.log("Total =",total)



let title = "Typescript Bootcamp"
let subtitle = "Learn The language fundamentals, build pratical programs";
console.log(typeof(subtitle))

let fullTitle = `${title} ${subtitle}`

console.log(`Full Title Type : ${typeof fullTitle}`)

console.log(`FUll Title : ${fullTitle}`)

let lessonsCount =10;
console.log(typeof(lessonCount))



const published = true;

if(published){
    console.log('The Course is published.')
}

printCourse(title,subtitle,lessonsCount)

function printCourse(title:string,subtitle:string,lessonsCount:number) {
    console.log("Double by lessonsCount: ", (lessonsCount * 2))
    let fullTitle = title + subtitle;
    console.log(`${fullTitle}`)
}


//primitive types : object
//if nested objects exist , course's type is all
const course:{
    title:string,
    subtitle:string,
    lessonsCount:number,
    author:{
        firstName:string,
        lastName:string
    }
} = {
    title : "TypeScript Bootcamp",
    subtitle : "Learn the language fundamentals, build practicle projects.",
    lessonsCount : 10,
    author:{
        firstName:"John",
        lastName:"Doe"
    }
}

console.log("Author Name : ",course.author.firstName)

console.log(`Type of :: ${typeof course}`)