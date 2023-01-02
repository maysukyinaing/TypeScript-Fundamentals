


function printCourse(title:string="Title", subtitle:string="Subtitle",lessonsCount:number=0) {
    console.log(`Title:${title}, Subtitle:${subtitle}, Lessons Count:${lessonsCount}`)
}

printCourse(
    "TypeScript",
    "Lern the language from ground up!",
    10
)

printCourse()