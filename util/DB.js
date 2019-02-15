let mysql = require("mysql");
let pool = mysql.createPool({
  connectionLimit: 10,
  host: "120.24.235.91",
  user: "root",
  password: "Nuoyadb_1",
  database: "test"
});
let Util = require("./Util.js");

class DBUtil {
  async batchQuery(sqls) {
    let error = "";
    let connect = await this.getConnection();
    let start = await this.beginTransaction(connect);
    if (start.err){
      return this.fail(connect , start);
    }

    for (let sql of sqls) {
      let result = await this.dao(connect, sql);
      if (result.err) {
        error = result;
        break;
      }
    }

    if (error) {
      let rollback = await this.rollback(connect);
      if (rollback.err) {
        return this.fail(connect , rollback);
      }else{
        return this.fail(connect, error);
      }
    }

    let commit = await this.commit(connect);
    if (commit.err){
      return this.fail(connect , start);
    }

    connect.release();
    return { code : 'OK'};
  }

  async query(sql) {
    let connect = await this.getConnection();
    let result = await this.dao(connect, sql);
    connect.release();
    return result;
  }

  dao(connection, sql) {
    return new Promise(function(resolve, reject) {
      connection.query(sql, function(error, results, fields) {
        if (error) {
          resolve({err: error});
        } else {
          resolve(results);
        }
      });
    });
  }

  beginTransaction(connection) {
    return new Promise(function(resolve, reject) {
      connection.beginTransaction(function(error) {
        if (error) {
          resolve({err: error});
        } else {
          resolve(true);
        }
      });
    });
  }

  commit(connection) {
    return new Promise(function(resolve, reject) {
      connection.commit(function(error) {
        if (error) {
          resolve({err: error});
        } else {
          resolve(true);
        }
      });
    });
  }

  rollback(connection) {
    return new Promise(function(resolve, reject) {
      connection.rollback(function(error) {
        if (error) {
          resolve({err: error});
        } else {
          resolve(true);
        }
      });
    });
  }

  fail(connection , res){
    connection.release();
    return res;
  }

  getConnection() {
    return new Promise(function(resolve, reject) {
      pool.getConnection(function(err, connection) {
        if (err) {
          resolve({err: error});
        } else {
          resolve(connection);
        }
      });
    });
  }
}

module.exports = new DBUtil();
