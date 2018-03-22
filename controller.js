
delete require.cache[require.resolve("./controller/healthController")];
let healthController = require("./controller/healthController");

let baseControllers = Object.assign({},healthController);

module.exports = baseControllers;