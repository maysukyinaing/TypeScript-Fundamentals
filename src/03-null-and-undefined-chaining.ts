//null has value (null value) no reference on object on memory
//undefined has no value (nothing)

//let title2:string=null;

let course3 = null


const title3 = course3?.textField?.title3 ?? "No Title Found!"
console.log(title3)

logCourseTilte(course3)


function logCourseTilte(course3) {
    //handling before occuring is goood practice
    if(!course3?.textField){
        console.log("TextField not defined.")
        return;
    }
    
    if(course3?.textField?.title3) {
        console.log(`The Title is ${course3.textField.title3}`)
    }
}


//undefined is false in if caluse