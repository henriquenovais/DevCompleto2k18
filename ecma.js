///ECMAscript is a language which has the purpose
//of being the stand pattern of script languages such as javascript

/*
In order to compile ECMAscript code it is required the use
of a JavaScript library. The main library for compiling ECMAscript is Babel.js .
*/ 

/*
There's a table which checks the compatibility of languages and web browsers:

http://kangax.github.io/compat-table/es6/

To put it bluntly, Babel's task is to convert a code from ECMAscript 6 to ECMAscript 5

The life cycle of a variable:

1. Declaration
var variable;

2. Initialization
variable = "name";

3. Usage

(variable) => {
    console.log("This is a variable:" + variable );
}


HOISTING

Some commands on JavaScript are hoisted to the top
of the pile of processes.

Which allows a code such as:
*/

console.log(sum(5,8));
//Even though the function is being called before it is declared
//the code still runs perfectly because the function declaration
//ascends to the top of the pile once it is declared.
function sum(a, b){
    return (a + b);
}

/*
In ECMAscript 6.0 hoisting happens with:
    var,let & const;
    functions declared as "function <name> (){}""
    Classes declared using the "class" keyword.

*/ 

var loto = 40;

if(loto){
    let loto = 10;
    console.log("Local scope variable: " + loto);
}

console.log("Global scope variable: " + loto);
