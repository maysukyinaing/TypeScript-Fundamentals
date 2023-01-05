

let anyValue:any;

anyValue = true 
anyValue = 10
anyValue = "Hello World";
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue : unknown;
unknownValue = true 
unknownValue = 10
unknownValue = "Hello World";
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

let value1:unknown = anyValue;
let value2:any = anyValue;
let value3:boolean = anyValue;
let value4:number = anyValue;
let value5:string = anyValue;
let value6:object = anyValue;
let value7:any[] = anyValue;
let value8:Function = anyValue;

//you can't assing unknown value to type assign variable
//undefined means variable has type and didn't initialize value
//any means lifted type system
let value9:unknown = unknownValue
let value10:any = unknownValue
//let var11:object = unknownValue

let value13;
unknownValue = "Hello"

//let var14:string = unknownValue

if(typeof unknownValue == "string") {
    value13 = "unknownValue"
}

console.log("Value 13 :: ", value13)