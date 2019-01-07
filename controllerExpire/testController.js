
delete require.cache[require.resolve("./service/testService")];
let TestService = require("./service/testService");
let testService = new TestService();

module.exports = {
    helloworld : function(req,res,next) {
        res.send("helloworld");
    },

    getTables: function(req, res, next) {
        testService.getTables(function(result) {
            res.send(result);
        });
    },

    createTable : function(req, res, next) {
        testService.createTable(function(result) {
            res.send(result);
        });
    },
    listUser : function(req, res, next) {
        testService.listUser(req.body,function(result){
            res.send(result);
        });
    },
    insertUser : function(req, res, next) {
        console.log(req.body);
        testService.insertUser(req.body,function(result){
            res.send({success: true});
        });
    },
    updateUser : function(req, res, next) {
        console.log(req.body);
        testService.updateUser(req.body,function(result){
            res.send({success: true});
        });
    },
    deleteUser : function(req, res, next) {
        testService.deleteUser(req.body,function(result){
            res.send({success: true});
        });
    },
    test: function(req,res,next) {
        testService.test();
        res.send("test");
    }
}