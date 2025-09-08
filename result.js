const p1 = document.getElementById("p1");
var username = localStorage.getItem("username");
//username = "갈을";
let today = new Date();
date = today.getDate();
month = today.getMonth();

let dabbyeon = dabfile;

var dabbyeongaesu = Object.keys(dabbyeon).length;

let usernametoarray = username.split('').map(function(char) {
    return char.charCodeAt(0) % 157;
});
console.log(usernametoarray);
var usernameint = 1;
for (const j in usernametoarray) {
    usernameint = usernameint + usernametoarray[j];
}
var seed = month + 1 + date + usernameint;
console.log(seed);
var x = Math.sin(seed) * 10000;
console.log(x);
number = Math.floor(dabbyeongaesu * (x - Math.floor(x)));
console.log(number);

//console.log(number);
var result = number % dabbyeongaesu;



p1.innerText = dabbyeon[result][0];
comment.innerText = dabbyeon[result][1];

