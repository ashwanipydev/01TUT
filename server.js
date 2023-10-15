console.log('Hello World');
// console.log(global);


const os = require('os')
const path = require("path")
const {add, subtact, maltiplay, divid} = require('./math');
const { log } = require('console');
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());
// console.log(__dirname);
// console.log(__filename);


// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))


// console.log(path.parse(__filename));

// console.log(math.add(2,3));
// console.log(math.subtact(2,3));
// console.log(math.maltiplay(2,3));
// console.log(math.divid(2,3));

console.log(add(2,3));
console.log(maltiplay(3,2));
console.log(subtact(3,2));
console.log(divid(4,5));