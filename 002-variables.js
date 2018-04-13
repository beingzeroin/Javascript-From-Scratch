// Three keywords - var, let, const

var a = 20;
let b = 20;
const c = 20;

{
    var a = 10; // block variable
    let b = 10;
    const c = 10;
}

console.log("a is %d b is %d c is %d", a, b, c);