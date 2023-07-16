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

// console.log(a);
// var a = 12
// js covert this line into
// var a; // called declaration
// a = 12; // called initialation

// undefined - exist but no value
// not defined - no exist

// 4. types in js

// there are two types in js which is primitive type and reference type

// primitive = number, string, boolean, null, undefined
//reference = {} [] ()

// aise koi bhi value jisko copy karne pr real copy nahi hota, balki usme value ka reference pass ho jata hai use reference value kahte hai
// var a = [1, 2, 3, 4, 5, 6]
// var b = a;
// b.pop();
//aur jisko copy karne pr real copy ho jaaye wo value primitive type value hoti hai

// 5.conditionals - if else else-if

// if - agar brackets ke under ki value true aai to if work krega
// if(33>12){

// }
// else - agar brackets ke under ki value false aai to else work krega
// if(33>76){
// }
// else(33<77){
// }
// else-if - jab ek se jyada else ho
// if(33>76){
// }
// else if(34>77){
// }
// else if(33>77){
// }
// else(33<77){
// }

// 6. loops - for while

// loop ka matlab rapeate
// 1 1 1 1 1 1 1 1 1  // repeate print 1
// 1 2 3 4 5 6 7 8 9  // repeate print

// for loop

// 0 - 10
// for(var i = 0; i<11; i++){
//     console.log(i);
// }

// while loop

// var a = 12;

// while (a < 20) {
//   a++;
// }

// 7. functions - means aap kuch code likh kar koi naam de sakte ho and baad me usey use kr sakte ho with that name as many times

//functions mainly teen kaam ke leye use hote hai

// 1)jab aapka code aap turant nahi chalana chahate aur future me chalama chahate ho
// 2)jab aapka code aap reuse karna chahte ho
// 3)jab aap code chalana chahate ho har bar with different date

// function helobolo(){
//     console.log("hellow");
// }
// helobolo();

// 8.parameter and arguments

//  parameter = variables junme value store hoti hai arguments vali
// function abcd(a, b, c) {
//   console.log(a, b, c);
// }
//  argument = real value jo hum dete hai fundtion chalate waqt
// abcd(12, 13, 14);

// 9. arrays - groupe of values

// hum ek variale me ek value store kar paate hai par our jab hame ek se jyade value store karni ho tab array ka use hota hai
// var arr  = [12,13,14 ....];

// 10.push pop unshift shift

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// push - pichese ek value dalega
// pop - pichese ek value nikalega
// unshift - aagese ek value dalega
// shift - aagese ekl value nikalega
// slice - bich me ek value dalega
// splice - bich me se ek value nikalega

 
//--------Advanced topics---------
 
// 1.difference btw var const let

// es5 = var // var old js me tha
// var function scoped hota hai => var apne parent fnc me kahi bhi use ho sakta hai 
// var adds itself to the window abject


// es6 = es5 + let const // let const new js me
// let const braces scoped hota hai => vo bracket ke under hi kam krega
// let const desn't adds

// 2.stack

// sidha sapat jis order me log aate hai usi order me jaate hai

// 3.heap memory

// jitne bhi variable ya data hum bnate hai unhe store kahi to karna padta hai uske liye heap memory hota hai 
// 1+3+4+5+6+7=26
// iske bich ka calculation jo bhi vo heap memory me hota hai

// 4. Execution context

// => execution context is a container where the function's code is ecuted and it's created whenever a function is called, it contains 3 things: variables, functions and lexical environment.

// 5. lexical environment

// => lexical environment hota hai ek chart jisme ye likha hota hai ke aapke particular function kin cheejo ko access kar sakta hai and kinko nhi, matlab ki it holds its scope and scope chain.