//--Pseudo random number generator--//

// prompt("What is your name ?");
// prompt("What is their name ?");

// var loveScore = Math.random();
// loveScore = loveScore * 100;
// loveScore = Math.floor(loveScore) + 1;

// if (loveScore > 70) {
//   alert("Your loveScore is " + loveScore + "%" + " like shahjan and mumtaz");
// } else if (loveScore > 30) {
//   alert(
//     "Your loveScore is " +
//       loveScore +
//       "%"
//   );
// } else if (loveScore > 0) {
//   alert(
//     "Your loveScore is " + loveScore + "%" + " you have to try hard and hard"
//   );
// } else {
//   alert("Invalid loveScore value. Please enter a positive number.");
// }
// = = = is equal to and also check datatype
// = = is equal to and does not care about datatype
// ! = = is not equal to

//--------- array-----

// var guestList = ['kalpit','karan','amol','yash','parish','samir','manish','sanu'];

// var guestName = prompt("Enter your name");

// if (guestList.includes(guestName)) {
//   alert('Welcome');
// }else{
//   alert('Sorry, maybe be next time')
// }

// -----fIZZBUZZ ---//

var output = [];

var count = 1;

function fizzBuzz() {
  while (count <= 100) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("FizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }

    count++;
  }

  console.log(output);
}
