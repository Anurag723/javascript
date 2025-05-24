let score = "51abc";
console.log(typeof score);

let innumber = Number(score);
console.log(typeof(innumber));      //type casting in js
console.log(innumber);              //Gives NaN as the value abc is a string and the js still converts it to an integer type


//  null converted to number gives 0
// ""=> false
// "hsjhj"=> true

let name = 541
console.log(typeof name);
let sname = String(name)
console.log(typeof sname);