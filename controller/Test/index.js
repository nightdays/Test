module.exports = {
    helloWorld: function(req , res) {
        res.send("hello ddddddf");
    },
    test: function(req,res) {
        let d = req.data ;

        let str = "";

        if(d.pageNum) {
            str += "你发送的pageNum是" + d.pageNum;
        }

        if(d.pageSize) {
            str += " 你发送的pageSize是" + d.pageSize;
        }

        if(!d.pageSize && !d.pageNum) {
            str = "抱歉，请传递参数";
        }

        res.send(str);
    },
    getUser: function(req,res) {
        let d = req.d;
        let result = {};
        if(d.id == 1) {
            result = { code: 200 , data: { id: 1, name:'wumin' , prefer_id : 1} };
        }else {
            result =  { code : 200 , data: []};
        }
        res.send(result);
    },

    getPrefer : function(req,res) {
        let d = req.d;
        let result = {};
        if(d.id == 1) {
            result = { code: 200 , data: ['打游戏','化妆','美甲'] };
        } else {
            result = { code : 200 , data: []};
        }
        res.send(result);
    }
    
}


