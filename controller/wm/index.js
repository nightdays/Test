let DB = require("../../util/DB");

module.exports = {
  'wm/helloWorld': function(req, res) {
    res.send("hello ddddddf");
  },

  'wm/dbTEST': async function(req, res) {
    let sql = "select count(x) as result from user";
    let result = await DB.query(sql).catch(function(err){ return {err: err}; });
    if(!result.err) {
        let count = result[0]['result'];
        res.send({result:count})
    }else{
        res.send( { result: 0 , errmsg : result.err } );
    }
    
  }
};
