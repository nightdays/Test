let page = require('./page.js');
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
    "standard/queryCutoverList.do": req(function(req, res, next) {
        let param = req.body;
        let p = page(param.pageNum,param.pageSize);
        
      let result = {
        total : p.total
      }
      let arr = [];
      for(let data of p.data) {
        let temp = {};
        temp.TITLE = data.index + '四川阿斯顿发射点开发了骄傲的放假啊三六九等阿斯顿发生发射点发啊手动阀手动阀阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬啊';
        temp.START_DATE = "2017-01-01";
        temp.END_DATE = "2018-01-01";
        temp.CITY = "无锡市";
        arr.push(temp);
      }
      result.data = arr;
      res.send(result);
    })
  };
  