
// delete require.cache[require.resolve("./controller/YogaController")];
// let YogaController = require("./controller/YogaController");
delete require.cache[require.resolve("./controller/standardController")];
let controller = require("./controller/standardController");

let baseControllers = Object.assign({},controller);

module.exports = baseControllers;