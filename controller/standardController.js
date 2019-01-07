let page = require("./page.js");
function req(cb) {
  return function(req, res, next) {
    try {
      cb(req, res, next);
    } catch (error) {
      res.send({
        data: null,
        errmsg: error,
        code: 500
      });
    }
  };
}

let baseName = "";

module.exports = {
  "standard/queryA": req(function(req, res, next) {
    let param = req.body;
    let p = page(param.pageNum, param.pageSize);

    let result = {
      total: p.total
    };
    let arr = [];
    for (let data of p.data) {
      let temp = {};
      temp.ID = data.index;
      temp.A = `${data.index}四川电信广播电台应卢卡斯分厘卡即使对方犬瘟热如婆须布兰卡的身份肺结核规划局规划局规划`
      temp.B = "090123123";
      temp.C = "1";// 业务类型
      temp.D = Math.floor( Math.random() * 4 );// 状态 1进行中，2已超时，3已完成
      temp.D = new Date();
      temp.E = "勘探中";
      temp.F = Math.floor( Math.random() * 100 );
      arr.push(temp);
    }
    result.data = arr;
    console.log(__dirname);
    res.send(result);
  })

};
