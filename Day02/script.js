let fruit = "Mango";
let vegetable = "Carrot";
var games = "Football";
var games = "Cricket";
fruit = "Apple";
fruit = vegetable;
let number06 = "Six";
let $ = "dollar";
let _ = "underscore";
const helper = 55;
const helper2 = 66;
const sum = helper + helper2;
// Should be noted that variables declared with `let` and `var` can be reassigned, while those declared with `const` cannot be reassigned after their initial assignment.
// var city = "New York";
// var city = "Los Angeles";
document.getElementById("demo").innerHTML = _;
document.getElementById("demo2").innerHTML = sum;

// Primitive Data types in JavaScript include: 
// String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Each of these data types has its own characteristics and uses in JavaScript programming. For example, Strings are used to represent text, Numbers are used for numerical values, Booleans represent true or false values, Null represents the intentional absence of any object value, Undefined indicates that a variable has not been assigned a value, Symbols are unique and immutable identifiers, and BigInt is used for representing integers with arbitrary precision. Understanding these data types is essential for effective programming in JavaScript.
let String = "Hello, World!";
let Number = 42;
let Boolean = true;
let nullValue = null;
let undefinedValue;
let symbolValue = Symbol("unique");
let bigIntValue = 9007199254740991n;
document.getElementById("demo").innerHTML = symbolValue.toString();

//Non Primitive Daa types in JavaScript includes: Object, Array & Function
let employee = {
    name:"Monish",
    age:27,
    isEmployed: true
}
document.getElementById("demo").innerHTML = employee.name;
document.getElementById("demo2").innerHTML = employee.isEmployed;

let fruits = ["Apple", "Banana", "Cherry"];
document.getElementById("demo").innerHTML = fruits[0];
document.getElementById("demo2").innerHTML = fruits.length;

//Memory
//Stack : This is where the primitive data types are stored. They are stored in a last-in-first-out (LIFO) manner, which means that the last variable declared will be the first one to be removed from the stack when it is no longer needed.
//Heap : This is where the non-primitive data types are stored. They are stored in a more complex manner, and they can be accessed using references. When a non-primitive data type is created, a reference to it is stored in the stack, while the actual data is stored in the heap. When the reference is no longer needed, it can be garbage collected, which means that the memory used by the non-primitive data type can be freed up for other uses.