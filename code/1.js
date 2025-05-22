console.log("Hello world!!!")       //print hello world

// while creating variable we use var, let and const

// var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
// let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
// const: Declares block-scoped variables that cannot be reassigned after their initial assignment.

function e(){
    var a = 14;
    console.log(a);

    if (a==14) {
        let b= 12;
        console.log(b);             //if b is to be used out side this if block it will cause an error as the let work for block only.
    }
}
e();

const abc = "India is great";
console.log(abc);                   // value cant be changed
