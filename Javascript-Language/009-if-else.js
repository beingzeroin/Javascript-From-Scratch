// Relational Operators
// ==   ===   !=   !==   <   >   <=   >=   

// Logical Operators
// &&  ||  ! 

// Boolean - false, Number - 0, empty strings, null, undefined and NaN 
// all of above are treated as false.

var a = 5;
var b = 5;
var c = 6;
var d = "5";

if(a==d){
    console.log("a=%d and d=%d are ==", a, d);
}

if(a===d){
    console.log("a=%d and d=%d are ===", a, d);
}else{
    console.log("a=%d and d=%d are not ===", a, d);
}