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
  "weChat/queryOrderProgress": req(function(req, res, next) {
    let list = [
      {
        orderid: "18921312312323",
        expectTime: "2018-01-01",
        mgr: "贾斯汀比伯",
        taskname: "施工环节"
      },
      {
        orderid: "18921312312323",
        expectTime: "2018-01-01",
        mgr: "贾斯汀比伯",
        taskname: "开通交付"
      }
    ];
    res.send("helloworld");
  })
};
