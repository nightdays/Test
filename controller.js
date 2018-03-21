
delete require.cache[require.resolve("./service/healthService")];
let HealthService = require("./service/healthService");
let healthService = new HealthService();

module.exports = {
    helloworld : function(req,res,next) {
        res.send("helloworld");
    },

    createTable : function(req, res, next) {
        healthService.createTable(function(result) {
            res.send(result);
        });
    },

    signUp : function(req, res, next) {
        healthService.insertUser(req.body,function(result) {
            res.send({success: true});
        });
    },

    getCaptionCode : function(req, res, next) {
        res.send({success: true});
    },

    listUser : function(req, res, next) {
        healthService.listUser(req.body,function(result){
            res.send(result);
        });
    },
    insertUser : function(req, res, next) {
        console.log(req.body);
        healthService.insertUser(req.body,function(result){
            res.send({success: true});
        });
    },
    updateUser : function(req, res, next) {
        console.log(req.body);
        healthService.updateUser(req.body,function(result){
            res.send({success: true});
        });
    },
    deleteUser : function(req, res, next) {
        healthService.deleteUser(req.body,function(result){
            res.send({success: true});
        });
    },

    listHealthProduct:  function(req, res, next) {
        healthService.listHealthProduct(req.body,function(result){
            res.send({success: true});
        });
    },


    userInfo : function(req, res, next ) {
        healthService.userInfo(req.body,function(result) {
            
        });
    }


}