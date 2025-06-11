// on the basis of memory used to store a data it is divided into two major parts primitive and non primitive data types

// primitive
// 7types:String, number, boolean, null, undefined, symbol and BigInt

const score = 100;  //make it dynamic as dtype not need to be specified
const scoreVal = 99.8;
const islogged = false;
const temp = null;
let user;

const id = Symbol("213")
const anotherid = Symbol("213")

console.log(id===anotherid);
console.log(id==anotherid);


const bigNum = 345678915112135024n;
console.log(typeof(bigNum));



// non primitive or reference type
// Array, Objects and functions

