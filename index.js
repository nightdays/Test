let fs = require('fs');
let controllers = {};

let path = require('path');

const fileList = fs.readdirSync(path.resolve(__dirname , './controller'));

for(let file of fileList) {
    let path = './controller/' + file;
    let ctrl = require(path);
    controllers = Object.assign( {} , controllers , ctrl);
}

module.exports = controllers;


// let Test = require('./cTest');

// module.exports = {
//     ...Test
// }


// function get(name) {

// }



// module.exports = controllerList;