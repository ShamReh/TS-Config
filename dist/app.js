"use strict";
let age;
age = 30;
const userName = "Shamshur";
console.log(userName);
const button = document.querySelector("button");
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
}
function clickHandler(message) {
    console.log('Clicked! ' + message);
}
// if (button){
// button.addEventListener("click", () => {
//   console.log("Clicked!");
// });
// }
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "You're Welcome!"));
}
