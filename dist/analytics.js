"use strict";
console.log('Sending data...');
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
sendAnalytics('The data: ');
