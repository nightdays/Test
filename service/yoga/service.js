
delete require.cache[require.resolve("../../util/Util.js")];
let Util = require("../../util/Util.js");
delete require.cache[require.resolve("./tableSql.js")];
let tableSql = require("./tableSql.js");
delete require.cache[require.resolve("./sql.js")];
let api = require("./sql.js");
let util = new Util();
let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: '120.24.235.91',
    user: 'root',
    password: 'Nuoyadb_1',
    database: 'yoga'
})

function fail(res,error,con){
    if(con){
        con.release();
    }
    res.send({code: 500, errmsg : error})
}

function success(res,result,con){
    if(con){
        con.release();
    }
    res.send({code:0 , data: result})
}

class YogaService {


    async listClassroom(req,res) {
        let con = await this.getConnection();
        let count = await this.dao(con,api.countClassroom(req.body));
        let result = await this.dao(con,api.listClassroom(req.body)).catch(err=>fail(res,err,con));
        if(result){
            let data = {
                total : count[0].total,
                list : result
            }
            success(res,data,con);
        }
    }

    async addClassroom(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addClassroom(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async updateClassroom(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateClassroom(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async removeClassroom(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeClassroom(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async listTrainer(req,res) {
        let con = await this.getConnection();
        let count = await this.dao(con,api.countTrainer(req.body));
        let result = await this.dao(con,api.listTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            let data = {
                total : count[0].total,
                list : result
            }
            success(res,data,con);
        }
    }

    async addTrainer(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async updateTrainer(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async removeTrainer(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async listLesson(req,res) {
        let con = await this.getConnection();
        let count = await this.dao(con,api.countLesson(req.body));
        let result = await this.dao(con,api.listLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            let data = {
                total : count[0].total,
                list : result
            }
            success(res,data,con);
        }
    }

    async addLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async updateLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async removeLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async listAppointLesson(req,res) {
        let con = await this.getConnection();
        let count = await this.dao(con,api.countAppointLesson(req.body));
        let result = await this.dao(con,api.listAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            let data = {
                total : count[0].total,
                list : result
            }
            success(res,data,con);
        }
    }

    async addAppointLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async updateAppointLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async removeAppointLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async appointLesson(req,res) {
        let param  = {
            user_id : 1,
            appoint_lesson_id : req.appoint_lesson_id
        };
        let con = await this.getConnection();
        let result = await this.dao(con,api.addUserAppointLesson(param)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    async listUserAppointLesson(req,res) {
        req.body.user_id = 1;
        let con = await this.getConnection();
        let result = await this.dao(con,api.listUserAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async removeUserAppointLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeUserAppointLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,null,con);
        }
    }

    




    async createTables(req,res){
        let con = await this.getConnection();

        for(let sqlKey in tableSql.deleteSql){
            let sql = tableSql.deleteSql[sqlKey];
            let result  = await this.dao(con , sql).catch(err=>fail(res,err,con));
            if(!result) return;
        }

        for(let sqlKey in tableSql.addSql){
            let sql = tableSql.addSql[sqlKey];
            let result  = await this.dao(con , sql).catch(err=>fail(res,err,con));
            if(!result) return;
        }

        success(res,null,con);
    }


    getConnection() {
        return new Promise(function(resolve,reject) {
            pool.getConnection(function(err,connection){
                if(err) {
                    reject(err);
                }else{
                    resolve(connection);
                }
            });
        });
    }

    dao(connection, sql) {
        return new Promise(function(resolve,reject){
            connection.query(sql, function(error,results,fields) {
                if(error){
                    reject(error);
                }else{
                    resolve(results);
                }
            })
        });
    }


}

module.exports = YogaService;