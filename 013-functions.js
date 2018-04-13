function basicFunction(){
    console.log("No Input Params, No Return Value");
}

function withInputParams(message){
    console.log("Input Param of Function is '%s'", message);
}

function withReturnValue(a, b){
    console.log("Values are ", a, b);
    return a+b;
}

//basicFunction();

//withInputParams("A Message");

var c = withReturnValue(3, 7);
console.log(c);