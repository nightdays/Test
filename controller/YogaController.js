
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
    },

    listTrainer(req,res){
        ys.listTrainer(req,res);
    },

    addTrainer(req,res){
        ys.addTrainer(req,res);
    },

    updateTrainer(req,res){
        ys.updateTrainer(req,res);
    },

    removeTrainer(req,res){
        ys.removeTrainer(req,res);
    },

    listLesson(req,res){
        ys.listLesson(req,res);
    },

    addLesson(req,res){
        ys.addLesson(req,res);
    },

    updateLesson(req,res){
        ys.updateLesson(req,res);
    },

    removeLesson(req,res){
        ys.removeLesson(req,res);
    },

    listAppointLesson(req,res){
        ys.listAppointLesson(req,res);
    },

    addAppointLesson(req,res){
        ys.addAppointLesson(req,res);
    },

    updateAppointLesson(req,res){
        ys.updateAppointLesson(req,res);
    },

    removeAppointLesson(req,res){
        ys.removeAppointLesson(req,res);
    }



}