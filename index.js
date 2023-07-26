//--Pseudo random number generator--//

prompt("What is your name ?");
prompt("What is their name ?");

var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your loveScore is " + loveScore + "%" + " like shahjan and mumtaz ");
} else {
  alert("Your loveScore is " + loveScore + " % ");
}
