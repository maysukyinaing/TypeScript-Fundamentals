

function saveCourse(course,callback:Function) {
    this.course1 = course;

    setTimeout(() => {
        callback(this.course1?.title ?? "unknown course");
    }, 1000)

}

const cb = (title:string) => console.log("Save Okay", title)

saveCourse({title:"TypeScript Learning"}, cb)

