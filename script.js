// -------Basic topics--------

// 1.word vs keyword

// word- jiska js me meaning na ho
// keyword-  jiske js me meaning ho

// 2.var const let

// var- jiski value change ho
// const- jiski value change na ho
// let-


//3. hoisting

// hoisting - variables and functions are get hoisted which means the declaration of variable is moved on the top of the code

console.log(a);
var a = 12 
// js covert this line into 
var a; // called declaration
a = 12; // called initialation

// undefined - exist but no value
// not defined - no exist

 // 4. types in js

// there are two types in js which is primitive type and reference type

// primitive = number, string, boolean, null, undefined
//reference = {} [] ()

// aise koi bhi value jisko copy karne pr real copy nahi hota, balki usme value ka reference pass ho jata hai use reference value kahte hai
var a = [1, 2, 3, 4, 5, 6]
var b = a;
b.pop();
//aur jisko copy karne pr real copy ho jaaye wo value primitive type value hoti hai
 

