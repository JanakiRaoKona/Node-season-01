const https = require('https');
const fs  =  require('fs')

console.log("Hello world");

https.get('https://dummyjson.com/products', (res) => { 
    console.log("data fetched successfully");
})

fs.readFile('./file.txt', 'utf8', (err, data) => { 
    console.log("Read the text file: " ,  data);
})

setTimeout(() => {
    console.log("timer after 5 sec")
}, 5000);

var a = 12394748;
var b = 9989728;
console.log("Hello world");
function multiplyfun(a, b) {
    var res = a + b;
    return res


}
var res = multiplyfun(a, b)
console.log(res);
