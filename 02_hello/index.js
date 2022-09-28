const currentTime = require("./date");

console.log(
  `Today is ${currentTime.getFullYear()}-${currentTime.getUTCMonth()}-${currentTime.getDate()}, the current time is ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
);

console.log("OK");
