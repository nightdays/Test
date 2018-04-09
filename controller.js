
delete require.cache[require.resolve("./controller/YogaController")];
let YogaController = require("./controller/YogaController");

let baseControllers = Object.assign({},YogaController);

module.exports = baseControllers;