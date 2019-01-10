
module.exports = {
    helloWorld: function(req , res) {
        res.send("hello ddddddf");
    },
    test: function(req,res) {
        let d = req.data ;
        res.send("你发送的pageNum是" + d.pageNum);
    }
}