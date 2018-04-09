
delete require.cache[require.resolve("../service/yoga/service")];
let YogaService = require("../service/yoga/service");
let ys = new YogaService();


module.exports = {

    createTables(req,res){
        ys.createTables(req,res);
    },

    listClassroom(req,res){
        ys.listClassroom(req,res);
    },

    addClassroom(req,res){
        ys.addClassroom(req,res);
    },

    updateClassroom(req,res){
        ys.updateClassroom(req,res);
    },

    removeClassroom(req,res){
        ys.removeClassroom(req,res);
    }

}