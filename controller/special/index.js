let DB = require("../../util/DB");

let permission1 = [
  {
    code : 'user',
  },
  {
    code : 'department',
  }
]

let permission2 = [
  {
    code : 'user',
  },
  {
    code : 'system',
  },
]

module.exports = {
  "special/login" : function(req , res) {
    let d = req.data;
    if(d.username == 'admin' && d.password == '123') {
      res.send( { code : 0 , data: permission1 } );
    }else if(d.username == 'admin2' && d.password == '234') {
      res.send({ code: 0 , data: permission2 })
    }else{
      res.send({ code : 200 , errmsg : '登录信息错误' });
    }
  },

  "special/helloWorld": function(req, res) {
    res.send("hello ddddddf");
  },

  "special/list": async function(req, res) {
    let sql = "select * from special";
    let result = await DB.query(sql);
    if (!result.err) {
      res.send({ code: 200 , data: result });
    } else {
      res.send({ result: 0, errmsg: result.err });
    }
  },

  "special/dbTEST": async function(req, res) {
    let sql = "select count(x) as result from user";
    let result = await DB.query(sql);
    if (!result.err) {
      let count = result[0]["result"];
      res.send({ result: count });
    } else {
      res.send({ result: 0, errmsg: result.err });
    }
  },

  "special/init": async function(req, res) {
    let sqls = [
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode20' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') ",
        "insert into special(a,b,c,d,e,f,g,workType) values ('TradeCode21' , '工单名称0001' , '2018-09-20 11:00:05' , '2018-09-20 11:00:05' , '已超时' , '集客技术方案设计组' , '王贝贝' , '0') "
    ]
    
    let result = await DB.batchQuery(sqls);
    if(!result.err) {
        res.send({ result: "成功" });
    }else{
        res.send( { result: 0 , errmsg : result.err } );
    }
  },

  "special/createTable": async function(req, res) {
    let sql = `
        create table special(
            id int primary key auto_increment,
            a varchar(20),
            b varchar(20),
            c varchar(20),
            d varchar(20),
            e varchar(20),
            f varchar(20),
            g varchar(20),
            workType varchar(20)
        )
    `;
    let result = await DB.query(sql).catch(function(err) {
      return { err: err };
    });
    console.log(result);
    if (!result.err) {
      res.send({ result: "成功" });
    } else {
      res.send({ result: 0, errmsg: result.err });
    }
  }
};
