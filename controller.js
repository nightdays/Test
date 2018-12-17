
// delete require.cache[require.resolve("./controller/YogaController")];
// let YogaController = require("./controller/YogaController");
delete require.cache[require.resolve("./controller/wechatController")];
let wechatController = require("./controller/wechatController");

let baseControllers = Object.assign({},wechatController);

module.exports = baseControllers;