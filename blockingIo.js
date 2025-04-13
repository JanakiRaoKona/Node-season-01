
const crypto = require('node:crypto')

// password based key word derivated function
// Async function try to block the main thread for the purpose of learning

const key = crypto.pbkdf2Sync('secret', 'salt', 1000000, 64, 'sha512');
console.log(key.toString('hex'));  // '3745e48...08d59ae'
setTimeout(() => {
    console.log("call me Right now....")
}, 0);

var a = 12394748;
var b = 9989728;
console.log("Hello world");
function multiplyfun(a, b) {
    var res = a + b;
    return res


}
var res = multiplyfun(a, b)
console.log(res);