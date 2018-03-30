
delete require.cache[require.resolve("../service/healthService")];
let HealthService = require("../service/healthService");
let healthService = new HealthService();

function req(cb) {
    return function(req,res,next) {
        try{
            cb(req,res,next);
        }catch(error) {
            res.send({
                data : null,
                errmsg : error,
                code : 500
            });
        }
    }
}

module.exports = {
    helloworld : req(function(req,res,next) {
        res.send("helloworld");
    }),

    createTable : req(function(req, res, next) {
        healthService.createTable(function(result) {
            res.send({code: 0});
        });
    }),

    signUp : req(function(req, res, next) {
        healthService.insertUser(req.body,function(result) {
            res.send({code: 0});
        });
    }),

    getCaptionCode : req(function(req, res, next) {
        res.send({code: 0});
    }),

    listUser : req(function(req, res, next) {
        healthService.listUser(req.body,function(result){
            res.send({code:0 , data: result});
        });
    }),
    insertUser : req(function(req, res, next) {
        console.log(req.body);
        healthService.insertUser(req.body,function(result){
            res.send({code: 0});
        });
    }),
    updateUser : req(function(req, res, next) {
        console.log(req.body);
        healthService.updateUser(req.body,function(result){
            res.send({code: 0});
        });
    }),
    deleteUser : req(function(req, res, next) {
        healthService.deleteUser(req.body,function(result){
            res.send({code: 0});
        });
    }),

    listHealthProduct:  req(function(req, res, next) {
        healthService.listHealthProduct(req.body,function(result){
            res.send({code:0 , data: result});
        });
    }),

    addHealthProduct:  req(function(req, res, next) {
        healthService.addHealthProduct(req.body,function(result){
            res.send(result);
        });
    }),


    getHealthProduct : req(function(req, res, next) {
        healthService.getHealthProduct(req.body,function(result){
            res.send({code:0 , data: result});
        });
    }),


    userInfo : function(req, res, next ) {
        healthService.userInfo(req.body,function(result) {
            res.send({code:0 , data: result});
        });
    },

    buyHealthProduct : function(req,res,next) {
        if(req.body.product_id == undefined) {
            res.send({code: 500,errmsg: "请求参数为空 ，请检查传的参数"});
            return;
        }
        healthService.buyHealthProduct(req.body,function(result) {
            res.send({code: 0});
        });
    },

    listFeeItem : req(function(req, res, next) {
        healthService.listFeeItem(req.body,function(result){
            res.send({code:0 , data: result});
        });
    }),

    addFeeItem : req(function(req, res, next) {
        healthService.addFeeItem(req.body,function(result){
            res.send(result);
        });
    }),

    removeFeeItem: req(function(req, res, next) {
        healthService.removeFeeItem(req.body,function(result){
            res.send(result);
        });
    }),

    wechat: function(req,res,next) {
        console.log(req);
        res.send(req.query.echostr);
    },


    login : function(req,res,next){
        console.log(req.query.open_id);

        let productStr = JSON.stringify(product);
        localStorage.setItem("product" , productStr);


        let product = localStorage.getItem("product");
        
        res.redirect("http://www.nightdays.net/healthService")
    }




}