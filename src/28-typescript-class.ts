

class Course28{

    static TOTAL_COURSES = 0;
    static readonly TYPESCRIPT_TITLE = "TypeScript Bootcamp";
   
    constructor(private title28:string,
                private price?:number,
                private subtitle28?:string,
                private creationDate28?:Date) {
                
                this.validate()
                Course28.TOTAL_COURSES++
    }

    get age() {
        const ageInMs = new Date().getTime() - this.creationDate28.getTime();
        return Math.round(ageInMs / 1000 / 60 /60 / 24);
    }

    get courseTitle() {
        return this.title28;
    }

    set courseTitle(newTitle:string) {
        if(!newTitle) {
            throw "Title cannot be empty!"
        }
        this.title28 = newTitle;
    }


    validate() {
        if(this.price <= 0) {
            throw "Price must be larger than zero";
        }
    }


    changeTilte(newTitle:string) {
        this.title28 = newTitle;
    }

    printTitle() {
        console.log("CourseTitle :: ", this.title28)
    }

    static printTitle() {
        console.log("CourseTitle (static way) :: ", this.TYPESCRIPT_TITLE)
    }

    static printTitle2(course:Course28) {
        console.log(`CourseTitle (static way 2) :: ${course.title28} `)
    }
}

const course28a = new Course28(
    "TypeScrit Bootcamp"
)



//course28.changeTilte('newTitle')

//course28.title28 = 'sth'

console.log(course28a)

console.log(course28a.courseTitle)
course28a.courseTitle = "newCourseTitle"


const angular=new Course28("New Angular Course", 0)
console.log('Angular Title :: ', angular.courseTitle)


console.log(`Total Course :: ${Course28.TOTAL_COURSES}`)
console.log(`Typescript :: ${Course28.TYPESCRIPT_TITLE}`)

angular.printTitle()
Course28.printTitle()
Course28.printTitle2(angular)