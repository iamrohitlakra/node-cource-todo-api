const {SHA256} = require('crypto-js');
var message = "i am user 4";

var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);
