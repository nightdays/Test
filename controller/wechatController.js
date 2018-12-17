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

let baseName = "";

module.exports = {
    "weChat/queryOrderProgress" : req(function(req,res,next) {
        res.send("helloworld");
    }),

}