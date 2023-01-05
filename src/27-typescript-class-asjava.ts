

class Course{
    private title27:string;
    private subtitle27:string;
    private creationDate27:Date;

    constructor(title27:string,subtitle27:string,creationDate27:Date) {
        this.subtitle27=title27;
        this.subtitle27=subtitle27;
        this.creationDate27=creationDate27;
    }

    age() {
        const ageInMs = new Date().getTime() - this.creationDate27.getTime();
        return Math.round(ageInMs / 1000 / 60 /60 / 24);
    }
    changeTilte(newTitle:string) {
        this.title27 = newTitle;
    }
}

const course27 = new Course(
    "TypeScrit Bootcamp",
    "Learn the language fundamentals",
    new Date(2000,08,26)
)

course27.changeTilte('newTitle')
console.log(course27)
console.log(course27.age())