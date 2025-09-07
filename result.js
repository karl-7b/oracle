const p1 = document.getElementById("p1");
var username = localStorage.getItem("username");
//username = "갈을";
let today = new Date();
date = today.getDate();
month = today.getMonth();

let dabbyeon = dabfile;

dabbyeongaesu = Object.keys(dabbyeon).length;

let usernametoarray = username.split('').map(function(char) {
    return char.charCodeAt(0) % 157;
});
console.log(usernametoarray);
var usernameint = 1;
for (const j in usernametoarray) {
    usernameint = usernameint + usernametoarray[j];
}
number = (month + 1 + (date) * (date) + usernameint);
//console.log(number);
result = number % dabbyeongaesu;



p1.innerText = dabbyeon[result][0];
comment.innerText = dabbyeon[result][1];

