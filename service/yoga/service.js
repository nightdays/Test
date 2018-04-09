
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
        let result = await this.dao(con,api.listClassroom(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
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
        let result = await this.dao(con,api.listTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async addTrainer(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async updateTrainer(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateTrainer(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
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
        let result = await this.dao(con,api.listLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async addLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.addLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async updateLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.updateLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }

    async removeLesson(req,res) {
        let con = await this.getConnection();
        let result = await this.dao(con,api.removeLesson(req.body)).catch(err=>fail(res,err,con));
        if(result){
            success(res,result,con);
        }
    }




    async createTables(req,res){
        let con = await this.getConnection();

        for(let sqlKey in tableSql.deleteSql){
            let sql = tableSql.deleteSql[sqlKey];
            await this.dao(con , sql);
        }

        for(let sqlKey in tableSql.addSql){
            let sql = tableSql.addSql[sqlKey];
            await this.dao(con , sql);
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