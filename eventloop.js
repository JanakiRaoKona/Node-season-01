const fs = require('fs')
const a = 10;
setImmediate(() => { console.log("set immediate") });

Promise.resolve("Promise").then(() => console.log("Promise"))

fs.readFile('./file.txt', 'utf8', (err, data) => { console.log("data: ", data) })

setTimeout(() => { console.log("set timeout") }, 0);

process.nextTick(() => { console.log("Process Nxt tick") });

function printA() {
    console.log("Print a: ", a)
}
printA();
console.log("last line of code");

//10,last, nxt , callback, settime , setImmediate, readfile